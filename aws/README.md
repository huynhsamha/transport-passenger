# Hướng dẫn deploy trên Amazon AWS

## Đăng ký tài khoản AWS free 1 năm

## EC2 trên AWS

+ Chọn Service -> EC2
+ Chọn Launch Instance
+ Step 1: Choose an Amazon Machine Image (AMI)
	+ Chọn Ubuntu Server 16.04
+ Step 2: Choose an Instance Type
	+ Chọn gói t2.micro (free tier)
	+ Chọn next Configure Instance Details
+ Step 3: Configure Instance Details
	+ Subnet: Chọn 1 subnet
	+ Auto-assign Public IP: Enable
	+ Next: Add Storage
+ Step 4: Add Storage
	+ Next: Add Tags
+ Step 5: Add Tags
	+ Add tag
	+ Key: Name - Value: transort-passenger 
+ Step 6: Configure Security Group
	+ Add rule
	+ Type: http
	+ Custom: 0.0.0.0/0
	+ Review and Launch
+ Lúc launch, chọn generate key-pair file, file *.pem* lưu trữ kĩ, dùng để SSH tới VPS.

## Sau khi launch instance
Lưu ý:
+ Public DNS (IPv4): trỏ tới IPv4 Public
+ IPv4 Public IP: địa chỉ IPv4 của VPS
+ user: ubuntu


## SSH tới VPS
### SSH trên Linux/Mac
```bash
ssh -i /path/to/file/.pem ubuntu@ec2-18-188-252-203.us-east-2.compute.amazonaws.com
```

### Install packages
```
sudo apt-get update
sudo apt-get upgrade

# đổi timezone tới Ho Chi Minh
sudo dpkg-reconfigure tzdata

# cài git
sudo apt-get install git

# cài Node 8
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

# cài npm
sudo apt-get install npm			
```

### Install & Config Nginx (Engine-X)
Tham khảo: [http://voidcanvas.com/setup-and-configure-nginx-in-aws-ec2-linuxubuntu-instance/](http://voidcanvas.com/setup-and-configure-nginx-in-aws-ec2-linuxubuntu-instance/)
#### nginx?
+ Nginx là 1 máy chủ reverse proxy mã nguồn mở cho các giao thức HTTP, HTTPS, ...
+ Nginx không dựa trên luồn (thread) để xử lý yêu cầu. Thay vào đó, nó sử dụng 1 kiến trúc bất đồng bộ hướng sự kiện linh hoạt . Kiến trúc này sử dụng ít, nhưng quan trọng hợn, là lượng bộ nhớ có thể dự đoán khi hoạt động. Đây chính là điểm mấu chốt khiến Nginx là 1 trong số ít những máy chủ được viết để giải quyết vấn đề C10K

#### Install
```
sudo apt-get install nginx
sudo service nginx start
```

#### Configure
```
cd /etc/nginx
ls

# 2 cái cần lưu ý:
## sites-available
## sites-enabled
## sites-enabled trỏ tới sites-available, sửa trong sites-available, tham chiếu từ sites-enabled tới sites-available

cd sites-available

# trong đây có cái default là file config cho nginx

sudo cp default myapp
# fork default thành file myapp

cd ../sites-enabled
sudo ln -s /etc/nginx/sites-available/myapp myapp
# tham khảo file từ enabled tới available

cd ../sites-available
sudo vim myapp
# sửa file config
```

Tới chỗ này, tham khảo thêm [https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04)

+ Chỗ listen default_server
+ Chỗ server_name tên domain dùng config này, lúc này chọn `*.amazonaws.com` (cái này là domain mặc định của aws)
+ Chỗ `location /` thêm `proxy` như cái tham khảo, proxy tới port `4200` của `localhost` (cái này dùng cho node chạy ở localhost port 4200).
```
...{
	...
	server_name *.amazonaws.com;
	...
	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		proxy_pass http://localhost:4200;
        	proxy_http_version 1.1;
       		proxy_set_header Upgrade $http_upgrade;
        	proxy_set_header Connection 'upgrade';
        	proxy_set_header Host $host;
        	proxy_cache_bypass $http_upgrade;
	}
	...
}
```

#### Restart nginx
```
sudo service nginx restart
```



### Tạo server Node
```
cd ~
mkdir Home
cd Home
```

Clone cái source git này về chạy, hoặc tạo cái node đơn giản cũng được, vậy là có cái node ở đây.

```
git clone ...
cd myapp
npm install
```



### Install pm2
Thay vì dùng `npm start`, sử dụng `pm2` (tìm hiểu để biết).
```
# install
sudo npm install pm2 -g

# start
pm2 start npm -- start

# restart server
pm2 restart all
```


### Test ở bước này
Vào địa chỉ IP public sẽ thấy cái welcome to ngin (do trong file nginx config server_name không có cái phần địa chỉ ip)

Còn vào public ipv4 domain, sẽ thấy cái app node (do server_name có dùng location ở port 4200 của localhost)

Test server node (dùng `pm2`)
```
pm2 log
```

Nếu không dùng `pm2`, lúc `npm start` ta phải giữ terminal chỗ đó, không tắt được (cái này là 1 lý do dùng pm2)


### Tạo domain free trỏ tới instance EC2

#### Domain freenom

Vào `freenom` tạo account, rồi đăng ký tên miền miễn phí, ví dụ `transport-passenger.tk`

Nhìn hình để hiểu:

Các lưu ý:
+ Nameserver: chọn default
+ Manage Freenom DNS, tạo các domain (với subdomain), trỏ tới target là địa chỉ ipv4 public bên ec2.

#### Chỉnh lại file config nginx
```
... {
	...
	server_name transport-passenger.tk;
	...
}
```

Restart nginx, pm2
```
sudo service nginx restart
pm2 restart all
```

#### Test lại domain
+ Vào domain đã đăng ký thấy node chạy
+ Vào domain bên aws hoặc ip thì thấy trang welcome nginx
