# Instruction to deploy on Amazon AWS

## Register account on AWS for free tier 1 year

## EC2 on AWS

+ Choose Service -> EC2

![alt text](https://github.com/huynhsamha/transport-passenger/blob/master/deploy-aws/img/01-ec2.png)

+ Choose Launch Instance

![alt text](https://github.com/huynhsamha/transport-passenger/blob/master/deploy-aws/img/02-step0.png)


+ Step 1: Choose an Amazon Machine Image (AMI)
	+ Ubuntu Server 16.04

![alt text](https://github.com/huynhsamha/transport-passenger/blob/master/deploy-aws/img/03-step01.png)


+ Step 2: Choose an Instance Type
	+ Choose t2.micro (free tier)
	+ Click Next Configure Instance Details

	
+ Step 3: Configure Instance Details
	+ Subnet: choose 1 subnet in options
	+ Auto-assign Public IP: Enable
	+ Click Next: Add Storage
	
+ Step 4: Add Storage
	+ Click Next: Add Tags

+ Step 5: Add Tags
	+ Click Add tag
	+ Key: Name - Value: transort-passenger (example)


+ Step 6: Configure Security Group
	+ Click Add rule
	+ Type: choose http
	+ Custom: add 0.0.0.0/0
	+ Click Review and Launch

+ Before launching, choose generate key-pair file *.pem*, private store (used for SSH to VPS on aws).

## After launch instance
+ Public DNS (IPv4): remote to IPv4 Public
+ IPv4 Public IP: IPv4 address of VPS
+ User defaut is: ubuntu (or root) (used for SSH)


## SSH to VPS
### On Linux/Mac
```bash
ssh -i /path/to/file/.pem ubuntu@ec2-18-188-252-203.us-east-2.compute.amazonaws.com
```

For Window (use PuTTy)

### Install packages
```
sudo apt-get update
sudo apt-get upgrade

# change timezone to Ho Chi Minh
sudo dpkg-reconfigure tzdata

# install git
sudo apt-get install git

# install Node 8 (or lastest)
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

# install npm
sudo apt-get install npm
```

### Install & Config Nginx (Engine-X)
Reference: [http://voidcanvas.com/setup-and-configure-nginx-in-aws-ec2-linuxubuntu-instance/](http://voidcanvas.com/setup-and-configure-nginx-in-aws-ec2-linuxubuntu-instance/)

#### Nginx ?
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

# lưu ý 2 cái này:
## sites-available
## sites-enabled
## sites-enabled trỏ tới sites-available
### + sửa trong sites-available
### + tham chiếu từ sites-enabled tới sites-available

cd sites-available

# file default is configure to nginx

sudo cp default myapp
# fork default to file myapp

cd ../sites-enabled
sudo ln -s /etc/nginx/sites-available/myapp myapp
# reference file from enabled to available

cd ../sites-available
sudo vim myapp
```

Reference: [https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04)

+ `listen default_server`: remove `default_server`
+ `server_name`: add domain, current type with `*.amazonaws.com` (default domain aws)
+ `location /`: add `proxy`, proxy to port `4200` of `localhost` (for node using on port 4200).
+ Example:
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



### Create server Node
```
cd ~
mkdir Home
cd Home

git clone ...
cd myapp
npm install
```


### Install pm2
Instead of `npm start`, use `pm2`.
```
# install
sudo npm install pm2 -g

# start
pm2 start npm -- start

# restart server
pm2 restart all
```


### Test
Vào địa chỉ IP public sẽ thấy cái welcome to nginx (do trong file nginx config server_name không có cái phần địa chỉ ip)

Còn vào public ipv4 domain, sẽ thấy cái app node (do server_name có dùng location ở port 4200 của localhost)

Test server node (dùng `pm2`)
```
pm2 log
```

Nếu không dùng `pm2`, lúc `npm start` ta phải giữ terminal chỗ đó, không tắt được (cái này là 1 lý do dùng pm2)


### Free domain remote to instance EC2

#### Domain Freenom (dot.tk)

Go `freenom` sign up an account, register new free domain, example `transport-passenger.tk`

![alt text](https://github.com/huynhsamha/transport-passenger/blob/master/deploy-aws/img/10-freenom.png)
![alt text](https://github.com/huynhsamha/transport-passenger/blob/master/deploy-aws/img/11-freenom.png)
![alt text](https://github.com/huynhsamha/transport-passenger/blob/master/deploy-aws/img/12-freenom.png)


+ Nameserver: choose default
+ Manage Freenom DNS, create domain (or subdomain), remote to target (ipv4 public on ec2).

#### Fix and restart Nginx
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

#### Test
+ Vào domain đã đăng ký thấy node chạy
+ Vào domain bên aws hoặc ip thì thấy trang welcome nginx
