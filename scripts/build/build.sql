 create or replace function show_message(error_message text) 
 returns void 
 as $$
 begin
     raise notice '%', error_message;
 end;
 $$ language plpgsql;


create or replace FUNCTION DELETE_BUS(ID1 IN BUSES.ID%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM BUSES WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE 
        DELETE FROM BUSES WHERE ID = ID1;
     	select show_message('DELETING A BUS IS SUCCESSFUL !') into v_result;
    END IF;
    RETURN 0;
END ;
$$ language plpgsql

create or replace FUNCTION DELETE_BUS_TYPE(ID1 IN BUS_TYPES.ID%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0; 
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM BUS_TYPES WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE 
        DELETE FROM BUS_TYPES WHERE ID = ID1;
        select show_message('DELETING A BUS_TYPE IS SUCCESSFUL !') into v_result;
    END IF;
    RETURN 0;
END ;
$$ language plpgsql

create or replace FUNCTION DELETE_CITY(id1 in CITIES.ID%TYPE)
RETURNS INTEGER 
AS $$
DECLARE
    row_count INTEGER := 0;
	v_result varchar(250);
BEGIN
    select count(*) into row_count from cities where ID = id1;
    if row_count = 0 then
		select show_message('ID DOES NOT EXIST !') into v_result;
        return 1;
    else
        delete from cities where ID = id1;
        select show_message('DELETING A CITY IS SUCCESSFUL !') into v_result;
    end if;
    RETURN 0;
END ;
$$ language plpgsql

create or replace FUNCTION DELETE_CUSTOMER(id1 in CUSTOMERS.ID%TYPE)
RETURNS INTEGER 
AS $$
DECLARE
    row_count integer :=0;
	v_result varchar(250);
BEGIN
    select count(*) into row_count from customers where ID = id1;
    if row_count = 0 then
		select show_message('ID DOES NOT EXIST !') into v_result;
        return 1;
    else
        delete from customers where ID = id1;
   		select show_message('DELETING A CUSTOMER IS SUCCESSFUL !') into v_result;
        return 0;
    end if;
    RETURN 0;
END ;
$$ language plpgsql

create or replace FUNCTION DELETE_DEPARTMENT(ID1 IN DEPARTMENTS.ID%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM DEPARTMENTS WHERE ID = ID1;
    if row_count  = 0 then
		select show_message('ID DOES NOT EXIST !') into v_result;
        return 1;
    else 
        delete from DEPARTMENTS where ID = id1;
       	select show_message('DELETING A DEPARTMENT IS SUCCESSFUL !') into v_result;
    end if;
    RETURN 0;
END ;
$$ language plpgsql

create or replace FUNCTION DELETE_DISTRICT(id1 in DISTRICTS.ID%TYPE)
RETURNS INTEGER 
AS $$
DECLARE
    row_count INTEGER := 0;
	v_result varchar(250);
BEGIN
    select count(*) into row_count FROM Districts where ID = id1;
    if row_count = 0 then
		select show_message('ID DOES NOT EXIST !') into v_result;
        return 1;
    else
        delete from districts where ID = id1;
        select show_message('DELETING A DISTRICT IS SUCCESSFUL !') into v_result;
    end if;
    
    RETURN 0;
END ;
$$ language plpgsql

create or replace FUNCTION DELETE_EMPLOYEE(id1 EMPLOYEES.ID%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    row_count INTEGER := 0;
	v_result varchar(250);
BEGIN
    select count(*) into row_count from employees where ID = id1;
    if row_count = 0 then
		select show_message('ID DOES NOT EXIST !') into v_result;
        return 1;
    else
        delete from employees where ID = id1;
        select show_message('DELETING A EMPLOYEE IS SUCCESSFUL !') into v_result;
        return 0;
    end if;
    RETURN 0;
END ;
$$ language plpgsql

create or replace FUNCTION DELETE_LOCATION(ID1 IN LOCATIONS.ID%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM LOCATIONS WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE
        DELETE FROM LOCATIONS WHERE ID = ID1;
        select show_message('DELETING A LOCATION IS SUCCESSFUL !') into v_result;
    END IF;
    RETURN 0;
END ;
$$ language plpgsql

create or replace FUNCTION DELETE_OFFICE(id1 in OFFICES.ID%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    row_count INTEGER := 0;
	v_result varchar(250);
BEGIN
    select count(*) into row_count from offices where ID = id1;
    if row_count  = 0 then
		select show_message('ID DOES NOT EXIST !') into v_result;
        return 1;
    else 
        delete from offices where ID = id1;
        select show_message('DELETING A OFFICE IS SUCCESSFUL !') into v_result;
    end if;
    RETURN 0;
END ;
$$ language plpgsql

create or replace FUNCTION DELETE_TICKET(ID1 IN TICKETS.ID%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM TICKETS WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN 
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE
        DELETE FROM TICKETS WHERE ID = ID1;
        select show_message('DELETING A TICKET IS SUCCESSFUL !') into v_result;
    END IF;
    RETURN 0;
END ;
$$ language plpgsql

create or replace FUNCTION DELETE_TRANSACTION(ID1 IN TRANSACTIONS.ID%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM TRANSACTIONS WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE
        DELETE FROM TRANSACTIONS WHERE ID = ID1;
		select show_message('DELETING A TRANSACTION IS SUCCESSFUL !') into v_result;
    END IF;
    RETURN 0;
END ;
$$ language plpgsql

create or replace FUNCTION DELETE_TRIP(ID1 IN TRIPS.ID%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM TRIPS WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE
        DELETE FROM TRIPS WHERE ID = ID1;
        select show_message('DELETING A TRIP IS SUCCESSFUL !') into v_result;
    END IF;
    RETURN 0;
END ;
$$ language plpgsql

create or replace FUNCTION DELETE_TRIP_DAILY(ID1 IN TRIP_DAILIES.ID%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM TRIP_DAILIES WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE
        DELETE FROM TRIP_DAILIES WHERE ID = ID1;
        select show_message('DELETING A TRIP_DAILY IS SUCCESSFUL !') into v_result;
    END IF;
    RETURN 0;
END ;
$$ language plpgsql

create or replace FUNCTION INSERT_BUS(ID1 IN BUSES.ID%TYPE, BUS_TYPE_ID1 IN BUSES.BUS_TYPE_ID%TYPE, REGISTRATION1 IN BUSES.REGISTRATION%TYPE, PRICE1 IN BUSES.PRICE%TYPE, 
STATUS1 IN BUSES.STATUS%TYPE, MILES1 IN BUSES.MILES%TYPE,WARRANTY_MONTH1 IN BUSES.WARRANTY_MONTH%TYPE, WARRANTY_MILES1 IN BUSES.WARRANTY_MILES%TYPE
, DESCRIPTION1 IN BUSES.DESCRIPTION%TYPE,CREATED_AT1 IN TIMESTAMP with time zone, UPDATED_AT1 IN TIMESTAMP with time zone)
RETURNS integer 
AS $$
DECLARE  
ROW_COUNT INTEGER := 0;
v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM BUSES WHERE ID = ID1;
    IF ROW_COUNT  > 0 THEN
		select show_message('Duplicate of ID !') into v_result;
        RETURN 1;
    ELSE
        SELECT COUNT(*) INTO ROW_COUNT FROM BUSES WHERE REGISTRATION = REGISTRATION1;
        IF ROW_COUNT  > 0 THEN
			select show_message('Duplicate of REGISTRATION !') into v_result;
            RETURN 2;
        END IF;
        SELECT COUNT(*) INTO ROW_COUNT FROM BUS_TYPES WHERE ID = BUS_TYPE_ID1;
        IF ROW_COUNT = 0 THEN
			select show_message('BUS_TYPE_ID does not exist !') into v_result;
            RETURN 3;
        ELSE
            INSERT INTO BUSES VALUES (ID1,BUS_TYPE_ID1,REGISTRATION1,PRICE1,STATUS1,MILES1,WARRANTY_MONTH1,WARRANTY_MILES1,DESCRIPTION1,CREATED_AT1,UPDATED_AT1);
            select show_message('Inserting BUSES is successful !') into v_result;
        END IF;
    END IF;
	RETURN 0;
END;
$$ language plpgsql;

create or replace FUNCTION INSERT_BUS_TYPES(ID1 IN BUS_TYPES.ID%TYPE, BRAND1 IN BUS_TYPES.BRAND%TYPE, MODEL1 IN BUS_TYPES.MODEL%TYPE,SEATS1 IN BUS_TYPES.SEATS%TYPE
,SPEED1 IN BUS_TYPES.SPEED%TYPE, CAPACITY_FULE1 IN BUS_TYPES.CAPACITY_FUEL%TYPE, MASS_NO_LOAD1 IN BUS_TYPES.MASS_NO_LOAD%TYPE, MASS_ALL1 IN BUS_TYPES.MASS_ALL%TYPE
, HEIGHT1 IN BUS_TYPES.HEIGHT%TYPE, WIDTH1 IN BUS_TYPES.WIDTH%TYPE, LENGTH1 IN BUS_TYPES.LENGTH%TYPE,CREATED_AT1 IN TIMESTAMP with time zone, UPDATED_AT1 IN TIMESTAMP with time zone)
RETURNS INTEGER
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM BUS_TYPES WHERE ID = ID1;
    IF ROW_COUNT > 0 THEN
        select show_message('Duplicate of ID !') into v_result;
		RETURN 1;
	ELSE
        INSERT INTO BUS_TYPES VALUES(ID1,BRAND1,MODEL1,SEATS1,SPEED1,CAPACITY_FULE1,MASS_NO_LOAD1,MASS_ALL1,HEIGHT1,WIDTH1,LENGTH1,CREATED_AT1,UPDATED_AT1);
    	select show_message('Inserting BUS_TYPES is successful !') into v_result;
    END IF;
	RETURN 0;
END;
$$ LANGUAGE plpgsql;


create or replace FUNCTION INSERT_CITY(id1 in CITIES.ID%type, name1 in CITIES.NAME%type, latitude1 in CITIES.LATITUDE%type, longitude1 in CITIES.LONGITUDE%type, 
website1 in CITIES.WEBSITE%type,tel_code1 in CITIES.TEL_CODE%type,zip_code1 in CITIES.ZIP_CODE%type, area_code1 in CITIES.AREA_CODE%type, CREATED_AT1 IN TIMESTAMP with time zone, UPDATED_AT1 IN TIMESTAMP with time zone)
RETURNS INTEGER 
AS $$
DECLARE
    row_count INTEGER := 0;
	v_result varchar(250);
BEGIN
    select count(*) into row_count from CITIES where ID = id1;
    if row_count > 0 then
		select show_message('Duplicate of ID !') into v_result;
        return 1;
    else
        insert into CITIES values (id1,name1,latitude1,longitude1,website1,tel_code1,zip_code1,area_code1,CREATED_AT1,UPDATED_AT1);
        select show_message('Inserting CITIES is successful !') into v_result;
		return 0;
    end if;
  
    RETURN 0;
END;
$$ language plpgsql;

create or replace FUNCTION INSERT_CUSTOMER(id1 in CUSTOMERS.ID%TYPE, ssn1 in CUSTOMERS.SSN%TYPE, first_name1 in CUSTOMERS.FIRST_NAME%TYPE,
last_name1 in CUSTOMERS.LAST_NAME%TYPE, tel1 in CUSTOMERS.TEL%TYPE, address1 in CUSTOMERS.ADDRESS%type, feed_back1 in CUSTOMERS.FEED_BACK%type,CREATED_AT1 IN TIMESTAMP with time zone, UPDATED_AT1 IN TIMESTAMP with time zone)
RETURNS INTEGER 
AS $$
DECLARE
    row_count_id INTEGER := 0;
    row_count_ssn INTEGER := 0;
	v_result varchar(250);
BEGIN
    select count(*) into row_count_id from CUSTOMERS WHERE ID = id1;    
    if row_count_id > 0 then
		select show_message('Duplicate of ID !') into v_result;
        return 1;
    end if;
    select count(*) into row_count_ssn from CUSTOMERS WHERE SSN = ssn1;   
    if row_count_ssn > 0 then 
		select show_message('Duplicate of SSN !') into v_result;
        return 2;
    end if;
    if last_name1 is null then
		select show_message('LAST_NAME is null !') into v_result;
        return 3;
    end if;
    
    insert into CUSTOMERS values (id1,ssn1,first_name1,last_name1,tel1, address1,feed_back1,CREATED_AT1,UPDATED_AT1);
	select show_message('Inserting CUSTOMERS is successful !') into v_result;
    return 0;
    
    RETURN NULL;
END;
$$ language plpgsql;


create or replace FUNCTION INSERT_DEPARTMENT(ID1 IN DEPARTMENTS.ID%TYPE, TYPE1 IN DEPARTMENTS.TYPE%TYPE, NAME1 IN DEPARTMENTS.NAME%TYPE, MANAGER_ID1 IN 
DEPARTMENTS.MANAGER_ID%TYPE, OFFICE_ID1 IN DEPARTMENTS.OFFICE_ID%TYPE,CREATED_AT1 IN TIMESTAMP with time zone, UPDATED_AT1 IN TIMESTAMP with time zone)
RETURNS INTEGER
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM DEPARTMENTS WHERE ID = ID1;
    IF ROW_COUNT > 0 THEN
		select show_message('Duplicate of ID !') into v_result;
        RETURN 1;
    ELSE
        SELECT COUNT(*) INTO ROW_COUNT FROM MANAGERS WHERE ID = MANAGER_ID1;
        IF ROW_COUNT = 0 THEN
			select show_message('MANAGER_ID DOES NOT EXIST !') into v_result;
            RETURN 2;
        ELSE 
            SELECT COUNT(*) INTO ROW_COUNT FROM OFFICES WHERE ID = OFFICE_ID1;
            IF ROW_COUNT = 0 THEN
				select show_message('OFFICE_ID DOES NOT EXIST !') into v_result;
                RETURN 3;
            ELSE
                INSERT INTO DEPARTMENTS VALUES(ID1,TYPE1,NAME1,MANAGER_ID1,OFFICE_ID1,CREATED_AT1,UPDATED_AT1);
				select show_message('Inserting DEPARTMENTS is successful !') into v_result;
            END IF;
        END IF;
    END IF;
    RETURN 0;
END;
$$ language plpgsql;

create or replace FUNCTION INSERT_DISTRICT(id1 in DISTRICTS.ID%TYPE, name1 in DISTRICTS.NAME%TYPE, latitude1 in DISTRICTS.LATITUDE%TYPE, 
longitude1 in DISTRICTS.LONGITUDE%TYPE,website1 in DISTRICTS.WEBSITE%TYPE, tel1 in DISTRICTS.TEL%TYPE, city_id1 in DISTRICTS.CITY_ID%TYPE,CREATED_AT1 IN TIMESTAMP with time zone, UPDATED_AT1 IN TIMESTAMP with time zone)
RETURNS INTEGER 
AS $$
DECLARE
    row_count INTEGER := 0;
	v_result varchar(250);
BEGIN
    select count(*) into row_count FROM DISTRICTS where ID = id1;
    if row_count > 0 then
		select show_message('Duplicate of ID !') into v_result;
        return 1;
    else 
        select count(*) into row_count FROM CITIES where ID = city_id1;
        if row_count = 0 then
			select show_message('CITY_ID DOES NOT EXIST !') into v_result;
            return 2;
        else
            insert into DISTRICTS values(id1,name1,latitude1,longitude1,website1,tel1,city_id1,CREATED_AT1,UPDATED_AT1);
 			select show_message('Inserting DISTRICTS is successful !') into v_result;
        end if;
    end if;
    RETURN 0;
END;
$$ language plpgsql;




create or replace FUNCTION INSERT_EMPLOYEE(id1 in EMPLOYEES.ID%TYPE, ssn1 in EMPLOYEES.SSN%TYPE, first_name1 in EMPLOYEES.FIRST_NAME%TYPE, last_name1 in EMPLOYEES.LAST_NAME%TYPE,
username1 in EMPLOYEES.USERNAME%TYPE, password1 in EMPLOYEES.PASSWORD%TYPE, email1 in EMPLOYEES.EMAIL%TYPE, tel1 in EMPLOYEES.TEL%TYPE, bank_account1 in EMPLOYEES.BANK_ACCOUNT%TYPE,
photo_url1 in EMPLOYEES.PHOTO_URL%TYPE, salary1 in EMPLOYEES.SALARY%TYPE, address1 in EMPLOYEES.ADDRESS%TYPE, join_date1 in EMPLOYEES.JOIN_DATE%TYPE, supervisor_id1 in EMPLOYEES.SUPERVISOR_ID%TYPE,
department_id1 in EMPLOYEES.DEPARTMENT_ID%TYPE, role1 in EMPLOYEES.ROLE%TYPE,CREATED_AT1 IN TIMESTAMP with time zone, UPDATED_AT1 IN TIMESTAMP with time zone) 
RETURNS INTEGER 
AS $$
DECLARE
	row_count INTEGER := 0;
	v_result varchar(250);
BEGIN
    select count(*) into row_count from EMPLOYEES where ID = id1;
    if row_count > 0 then
        select show_message('Duplicate of ID !') into v_result;
		return 1;
    end if;
    
    select count(*) into row_count from EMPLOYEES where SSN = ssn1;
    if row_count > 0 then
		select show_message('Duplicate of SSN !') into v_result;
        return 2;
    end if;
    
    select count(*) into row_count from EMPLOYEES where USERNAME = username1;
    if row_count > 0 then
		select show_message('Duplicate of USERNAME !') into v_result;
        return 3;
    end if;
    
    select count(*) into row_count from EMPLOYEES where EMAIL = email1;
    if row_count > 0 then
		select show_message('Duplicate of EMAIL !') into v_result;
        return 4;
    end if;
  
    select count(*) into row_count from EMPLOYEES where BANK_ACCOUNT = bank_account1;
    if row_count > 0 then
		select show_message('Duplicate of BANK_ACCOUNT !') into v_result;
        return 5;
    end if;
    
    select count(*) into row_count from EMPLOYEES where ID = supervisor_id1;
    if row_count = 0 then
		select show_message('SUPERVISOR_ID DOES NOT EXIST !') into v_result;
        return 6;
    end if;
    
    select count(*) into row_count from DEPARTMENTS where ID = department_id1;
    if row_count = 0 then
		select show_message('DEPARTMENT_ID DOES NOT EXIST !') into v_result;
        return 7;
    end if;
    
    insert into EMPLOYEES values (id1,ssn1,first_name1,last_name1,username1,password1,email1,tel1,bank_account1,photo_url1,salary1,address1
    ,join_date1,supervisor_id1,department_id1,role1,CREATED_AT1,UPDATED_AT1);    
    select show_message('Inserting EMPLOYEES is successful !') into v_result;
    RETURN 0;
END ;
$$ language plpgsql;

create or replace FUNCTION INSERT_LOCATION(ID1 IN LOCATIONS.ID%TYPE, NAME1 IN LOCATIONS.NAME%TYPE, LATITUDE1 IN LOCATIONS.LATITUDE%TYPE
, LONGITUDE1 IN LOCATIONS.LONGITUDE%TYPE,ADDRESS1 IN LOCATIONS.ADDRESS%TYPE, TEL1 IN LOCATIONS.TEL%TYPE, OPEN_TIME1 IN LOCATIONS.OPEN_TIME%TYPE, CLOSE_TIME1 IN LOCATIONS.CLOSE_TIME%TYPE,  DISTRICT_ID1 
IN LOCATIONS.DISTRICT_ID%TYPE,TYPE1 IN LOCATIONS.TYPE%TYPE,CREATED_AT1 IN TIMESTAMP with time zone, UPDATED_AT1 IN TIMESTAMP with time zone) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM LOCATIONS WHERE ID = ID1;
    IF ROW_COUNT > 0 THEN
        select show_message('Duplicate of ID !') into v_result;
		RETURN 1;
    ELSE
        SELECT COUNT(*) INTO ROW_COUNT FROM DISTRICTS WHERE ID = DISTRICT_ID1;
        IF ROW_COUNT = 0 THEN
			select show_message('DISTRICT_ID DOES NOT EXIST !') into v_result;
            RETURN 2;
        ELSE
            INSERT INTO LOCATIONS VALUES(ID1,NAME1,LATITUDE1,LONGITUDE1,ADDRESS1,TEL1,OPEN_TIME1,CLOSE_TIME1,DISTRICT_ID1,TYPE1,CREATED_AT1,UPDATED_AT1);
           	select show_message('Inserting LOCATIONS is successful !') into v_result;
        END IF;
    END IF;
    RETURN 0;
END ;
$$ language plpgsql;

create or replace FUNCTION INSERT_OFFICE(id1 in OFFICES.ID%TYPE, name1 in OFFICES.NAME%TYPE, address1 in OFFICES.ADDRESS%TYPE, is_headquater1 in OFFICES.IS_HEADQUATER%TYPE, district_id1 in 
OFFICES.DISTRICT_ID%TYPE, hotline1 in OFFICES.HOTLINE%TYPE, latitude1 in OFFICES.LATITUDE%TYPE,longitude1 in OFFICES.LONGITUDE%TYPE,CREATED_AT1 IN TIMESTAMP with time zone, UPDATED_AT1 IN TIMESTAMP with time zone) 
RETURNS INTEGER 
AS $$
DECLARE
    row_count INTEGER := 0;
	v_result varchar(250);
BEGIN
    select count(*) into row_count from offices where ID = id1;
    if row_count > 0 then
		select show_message('Duplicate of ID !') into v_result;
        return 1;
    else
        select count(*) into row_count from districts where ID = district_id1;
        if row_count = 0 then
			select show_message('DISTRICT_ID DOES NOT EXIST !') into v_result;
            return 2;
        else
            insert into offices values(id1,name1,address1,is_headquater1,district_id1,hotline1,latitude1,longitude1,CREATED_AT1,UPDATED_AT1);
            select show_message('Inserting OFFICES is successful !') into v_result;
        end if;
    end if;
    
    RETURN 0;
END;
$$ language plpgsql;

create or replace FUNCTION INSERT_TICKET(ID1 IN TICKETS.ID%TYPE, CODE1 IN TICKETS.CODE%TYPE, TRANSACTION_ID1 IN TICKETS.TRANSACTION_ID%TYPE,
TRIP_ID1 IN TICKETS.TRIP_ID%TYPE,CREATED_AT1 IN TIMESTAMP with time zone, UPDATED_AT1 IN TIMESTAMP with time zone) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM TICKETS WHERE ID = ID1;
    IF ROW_COUNT > 0 THEN 
		select show_message('Duplicate of ID !') into v_result;
        RETURN 1;
    ELSE
         SELECT COUNT(*) INTO ROW_COUNT FROM TRANSACTIONS WHERE ID = TRANSACTION_ID1;
         IF ROW_COUNT = 0 THEN 
		 select show_message('TRANSACTION_ID DOES NOT EXIST !') into v_result;
            RETURN 2;
         END IF;
         
         SELECT COUNT(*) INTO ROW_COUNT FROM TRIPS WHERE ID = TRIP_ID1;
         IF ROW_COUNT = 0 THEN 
		 select show_message('TRIP_ID DOES NOT EXIST !') into v_result;
            RETURN 3;
         END IF;
         
         INSERT INTO TICKETS VALUES(ID1,CODE1,TRANSACTION_ID1,TRIP_ID1);
         select show_message('Inserting TICKETS is successful !') into v_result;
         
    END IF;

    RETURN 0;
END ;
$$ language plpgsql;

create or replace FUNCTION INSERT_TRANSACTION(ID1 IN TRANSACTIONS.ID%TYPE, CODE1 IN TRANSACTIONS.CODE%TYPE, 
CUSTOMER_ID1 IN TRANSACTIONS.CUSTOMER_ID%TYPE,SELLER_ID1 IN TRANSACTIONS.SELLER_ID%TYPE,TOTAL_PRICE1 IN TRANSACTIONS.TOTAL_PRICE%TYPE, 
PAYMENT_METHOD1 IN TRANSACTIONS.PAYMENT_METHOD%TYPE, STATUS1 IN TRANSACTIONS.STATUS%TYPE,TIMESTAMP1 IN TRANSACTIONS.TIMESTAMP%TYPE,CREATED_AT1 IN TIMESTAMP with time zone, UPDATED_AT1 IN TIMESTAMP with time zone) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM TRANSACTIONS WHERE ID = ID1;
    IF ROW_COUNT > 0 THEN
		select show_message('Duplicate of ID !') into v_result;
        RETURN 1;
    ELSE
        SELECT COUNT(*) INTO ROW_COUNT FROM CUSTOMERS WHERE ID = CUSTOMER_ID1;
        IF ROW_COUNT = 0 AND CUSTOMER_ID1 IS NOT NULL THEN
			select show_message('CUSTOMER_ID DOES NOT EXIST !') into v_result;
            RETURN 2;
        END IF;
        
        SELECT COUNT(*) INTO ROW_COUNT FROM SELLERS WHERE ID = SELLER_ID1;
        IF ROW_COUNT = 0 AND SELLER_ID1 IS NOT NULL THEN
			select show_message('SELLER_ID DOES NOT EXIST !') into v_result;
            RETURN 3;
        END IF;
        
       	INSERT INTO TRANSACTIONS VALUES(ID1,CODE1,CUSTOMER_ID1,SELLER_ID1,TOTAL_PRICE1,PAYMENT_METHOD1,STATUS1,TIMESTAMP1,CREATED_AT1,UPDATED_AT1);
        select show_message('Inserting TRANSACTIONS is successful !') into v_result;
        
    END IF;
    RETURN 0;
END;
$$ language plpgsql;

create or replace FUNCTION INSERT_TRIP(ID1 IN TRIPS.ID%TYPE, TRIP_DAILY_ID1 IN TRIPS.TRIP_DAILY_ID%TYPE, DEPART_DATE1 IN TRIPS.DEPART_DATE%TYPE,
BUS_ID1 IN TRIPS.BUS_ID%TYPE, DRIVER_ID1 IN TRIPS.DRIVER_ID%TYPE, ASSISTANT_ID1 IN TRIPS.ASSISTANT_ID%TYPE, IS_COMPLETE1 IN TRIPS.IS_COMPLETE%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM TRIPS WHERE ID = ID1;
    IF ROW_COUNT > 0 THEN
        select show_message('Duplicate of ID !') into v_result;
		RETURN 1;
    END IF;
    
    SELECT COUNT(*) INTO ROW_COUNT FROM TRIP_DAILIES WHERE ID = TRIP_DAILY_ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('TRIP_DAILY_ID DOES NOT EXIST !') into v_result;
        RETURN 2;
    END IF;
    
    SELECT COUNT(*) INTO ROW_COUNT FROM BUSES WHERE ID = BUS_ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('BUS_ID DOES NOT EXIST !') into v_result;
        RETURN 3;
    END IF;
    
    SELECT COUNT(*) INTO ROW_COUNT FROM DRIVERS WHERE ID = DRIVER_ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('DRIVER_ID DOES NOT EXIST !') into v_result;
        RETURN 4;
    END IF;
    
    SELECT COUNT(*) INTO ROW_COUNT FROM ASSISTANTS WHERE ID = ASSISTANT_ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('ASSISTANT_ID DOES NOT EXIST !') into v_result;
        RETURN 5;
    END IF;
    
    INSERT INTO TRIP VALUES(ID1,TRIP_DAILY_ID1,DEPART_DATE1,BUS_ID1,DRIVER_ID1,ASSISTANT_ID1,IS_COMPLETE1,CREATED_AT1,UPDATED_AT1);
    select show_message('Inserting TRIPS is successful !') into v_result;
    
    RETURN 0;
END ;
$$ language plpgsql;

create or replace FUNCTION INSERT_TRIP_DAILY(ID1 IN TRIP_DAILIES.ID%TYPE , NAME1 IN TRIP_DAILIES.NAME%TYPE, DEPART_STATION_ID1 IN TRIP_DAILIES.DEPART_STATION_ID%TYPE,ARRIVE_STATION_ID1 IN 
TRIP_DAILIES.ARRIVE_STATION_ID%TYPE , DEPART_TIME1 IN TRIP_DAILIES.DEPART_TIME%TYPE,DURATION1 IN TRIP_DAILIES.DURATION%TYPE, PRICE1 IN TRIP_DAILIES.PRICE%TYPE, DISTANCE1 IN TRIP_DAILIES.DISTANCE%TYPE, HOTLINE1 IN TRIP_DAILIES.HOTLINE%TYPE
, BUS_TYPE_ID1 IN TRIP_DAILIES.BUS_TYPE_ID%TYPE,CREATED_AT1 IN TIMESTAMP with time zone, UPDATED_AT1 IN TIMESTAMP with time zone)
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM TRIP_DAILIES WHERE ID = ID1;
    IF ROW_COUNT > 0 THEN
		select show_message('Duplicate of ID !') into v_result;
        RETURN 1;
    ELSE
        SELECT COUNT(*) INTO ROW_COUNT FROM BUS_STATIONS WHERE ID = DEPART_STATION_ID1;
        IF ROW_COUNT = 0 THEN
			select show_message('DEPART_STATION_ID DOES NOT EXIST !') into v_result;
            RETURN 2;
        END IF;
        
        SELECT COUNT(*) INTO ROW_COUNT FROM BUS_STATIONS WHERE ID = ARRIVE_STATION_ID1;
        IF ROW_COUNT = 0 THEN
			select show_message('ARRIVE_STATION_ID DOES NOT EXIST !') into v_result;
            RETURN 3;
        END IF;
        
        SELECT COUNT(*) INTO ROW_COUNT FROM BUS_TYPES WHERE ID = BUS_TYPE_ID1;
        IF ROW_COUNT = 0 THEN
			select show_message('BUS_TYPE_ID DOES NOT EXIST !') into v_result;
            RETURN 4;
        END IF;
        
        INSERT INTO TRIP_DAILIES VALUES(ID1,NAME1,DEPART_STATION_ID1,ARRIVE_STATION_ID1,DEPART_TIME1,ARRIVE_TIME1,PRICE1,DISTANCE1,HOTLINE1,
        BUS_TYPE_ID1,CREATED_AT1,UPDATED_AT1);
        select show_message('Inserting TRIP_DAILIES is successful !') into v_result;
        
    END IF;
    RETURN 0;
END ;
$$ language plpgsql;

create or replace FUNCTION UPDATE_BUS(ID1 IN BUSES.ID%TYPE, BUS_TYPE_ID1 IN  BUSES.BUS_TYPE_ID%TYPE, REGISTRATION1 IN  BUSES.REGISTRATION%TYPE, PRICE1 IN  BUSES.PRICE%TYPE, 
STATUS1 IN  BUSES.STATUS%TYPE, MILES1 IN  BUSES.MILES%TYPE,WARRANTY_MONTH1 IN  BUSES.WARRANTY_MONTH%TYPE, WARRANTY_MILES1 IN  BUSES.WARRANTY_MILES%TYPE
, DESCRIPTION1 IN  BUSES.DESCRIPTION%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
    ROW_BUS BUSES%ROWTYPE;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM BUSES WHERE ID = ID1;
    IF ROW_COUNT  = 0 THEN
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE
        SELECT * INTO ROW_BUS FROM BUSES WHERE ID = ID1;
        
        IF BUS_TYPE_ID1 IS NULL THEN
            BUS_TYPE_ID1 := ROW_BUS.BUS_TYPE_ID;
        ELSE
            SELECT COUNT(*) INTO ROW_COUNT FROM BUS_TYPES WHERE ID = BUS_TYPE_ID1;
            IF ROW_COUNT = 0 THEN
				select show_message('BUS_TYPE_ID DOES NOT EXIST !') into v_result;
                RETURN 2;
            END IF;
        END IF;
        
        IF REGISTRATION1 IS NULL THEN
            REGISTRATION1 :=  ROW_BUS.REGISTRATION;
        ELSE
            SELECT COUNT(*) INTO ROW_COUNT FROM BUSES WHERE REGISTRATION = REGISTRATION1;
             IF ROW_COUNT > 0 THEN
			 	select show_message('REGISTRATION DOES NOT EXIST !') into v_result;
                RETURN 3;
            END IF;
        END IF;
        
        IF PRICE1 IS NULL THEN
            PRICE1 := ROW_BUS.PRICE;
        END IF;
        
        IF STATUS1 IS NULL THEN
            STATUS1 := ROW_BUS.STATUS;
        END IF;
        
        IF MILES1 IS NULL THEN
            MILES1 := ROW_BUS.MILES;
        END IF;
        
       	IF WARRANTY_MONTH1 IS NULL THEN
            WARRANTY_MONTH1 := ROW_BUS.WARRANTY_MONTH;
        END IF;
        
        IF WARRANTY_MILES1 IS NULL THEN
            WARRANTY_MILES1 := ROW_BUS.WARRANTY_MILES;
        END IF;
        
        IF DESCRIPTION1 IS NULL THEN
            DESCRIPTION1 := ROW_BUS.DESCRIPTION;
        END IF;
        
        UPDATE BUSES SET BUS_TYPE_ID = BUS_TYPE_ID1, REGISTRATION = REGISTRATION1, PRICE = PRICE1, STATUS = STATUS1, MILES = MILES1,WARRANTY_MONTH = WARRANTY_MONTH1, WARRANTY_MILES = WARRANTY_MILES1, 
        DESCRIPTION = DESCRIPTION1,CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP 
		WHERE ID = ID1;
        select show_message('UPDATING BUSES IS SUCCESSFUL !') into v_result;
        
    END IF;
    RETURN 0;
END;
$$ language plpgsql;

create or replace FUNCTION UPDATE_BUS_STATION(ID1 IN BUS_STATIONS.ID%TYPE, ESTABLISH_DATE1 IN  BUS_STATIONS.ESTABLISH_DATE%TYPE, 
OWNER_NAME1 IN  BUS_STATIONS.OWNER_NAME%TYPE)
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
    ROW_BUS_STATION BUS_STATIONS%ROWTYPE;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM BUS_STATIONS WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE
        SELECT * INTO ROW_BUS_STATION FROM BUS_STATIONS WHERE ID = ID1;
        
        IF ESTABLISH_DATE1 IS NULL THEN
            ESTABLISH_DATE1 := ROW_BUS_STATION.ESTABLISH_DATE;
        END IF;
        
        IF OWNER_NAME1 IS NULL THEN
            OWNER_NAME1 := ROW_BUS_STATION.OWNER_NAME;
        END IF;
        
        UPDATE BUS_STATIONS SET ESTABLISH_DATE = ESTABLISH_DATE1, OWNER_NAME = OWNER_NAME1, CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP 
        WHERE ID = ID1;
	select show_message('UPDATING BUS_STATIONS IS SUCCESSFUL !') into v_result;
        
    END IF;
    
    RETURN 0;
END ;
$$ language plpgsql;

create or replace FUNCTION UPDATE_BUS_TYPE(ID1 IN  BUS_TYPES.ID%TYPE, BRAND1 IN  BUS_TYPES.BRAND%TYPE, MODEL1 IN  BUS_TYPES.MODEL%TYPE,SEATS1 IN  BUS_TYPES.SEATS%TYPE
,SPEED1 IN  BUS_TYPES.SPEED%TYPE, CAPACITY_FUEL1 IN  BUS_TYPES.CAPACITY_FUEL%TYPE, MASS_NO_LOAD1 IN  BUS_TYPES.MASS_NO_LOAD%TYPE, MASS_ALL1 IN  BUS_TYPES.MASS_ALL%TYPE
, HEIGHT1 IN  BUS_TYPES.HEIGHT%TYPE, WIDTH1 IN  BUS_TYPES.WIDTH%TYPE, LENGTH1 IN  BUS_TYPES.LENGTH%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
    ROW_BUS_TYPE BUS_TYPES%ROWTYPE;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM BUS_TYPES WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE
        SELECT * INTO ROW_BUS_TYPE FROM BUS_TYPES WHERE ID = ID1;
        IF BRAND1 IS NULL THEN
            BRAND1 := ROW_BUS_TYPE.BRAND;
        END IF;
        
        IF MODEL1 IS NULL THEN
            MODEL1 := ROW_BUS_TYPE.MODEL;
        END IF;
        
        IF SPEED1 IS NULL THEN
            SPEED1 := ROW_BUS_TYPE.SPEED;
        END IF;
        
        IF CAPACITY_FUEL1 IS NULL THEN
            CAPACITY_FUEL1 := ROW_BUS_TYPE.CAPACITY_FUEL;
        END IF;
        
        IF MASS_NO_LOAD1 IS NULL THEN
            MASS_NO_LOAD1 := ROW_BUS_TYPE.MASS_NO_LOAD;
        END IF;
        
        IF MASS_ALL1 IS NULL THEN
            MASS_ALL1 := ROW_BUS_TYPE.MASS_ALL;
        END IF;
        
        IF HEIGHT1 IS NULL THEN
            HEIGHT1 := ROW_BUS_TYPE.HEIGHT;
        END IF;
        
        IF WIDTH1 IS NULL THEN
            WIDTH1 := ROW_BUS_TYPE.WIDTH;
        END IF;
        
        IF LENGTH1 IS NULL THEN
            LENGTH1 := ROW_BUS_TYPE.LENGTH;
        END IF;
        
        update bus_types set BRAND = BRAND1, MODEL = MODEL1, SEATS = SEATS1,SPEED = SPEED1, CAPACITY_FUEL = CAPACITY_FUEL1, MASS_NO_LOAD = MASS_NO_LOAD1, 
        MASS_ALL = MASS_ALL1, HEIGHT = HEIGHT1,WIDTH = WIDTH1, LENGTH = LENGTH1, CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP;
        select show_message('UPDATING BUS_TYPES IS SUCCESSFUL !') into v_result;
        
    END IF;
    RETURN 0;
END ;
$$ language plpgsql;

create or replace FUNCTION UPDATE_CITY(id1 in  CITIES.ID%type, name1 in  CITIES.NAME%type, latitude1 in  CITIES.LATITUDE%type, longitude1 in  CITIES.LONGITUDE%type, 
website1 in  CITIES.WEBSITE%type,tel_code1 in  CITIES.TEL_CODE%type,zip_code1 in  CITIES.ZIP_CODE%type, area_code1 in  CITIES.AREA_CODE%type, center_district_id1 in  CITIES.CENTER_DISTRICT_ID%type)
RETURNS INTEGER 
AS $$
DECLARE
    row_count INTEGER := 0;
    row_city CITIES%ROWTYPE;
	v_result varchar(250);
BEGIN
    IF id1 is null then
		select show_message('ID IS NULL !') into v_result;
        return 1;
    else
        select count(*) into row_count from cities where ID = id1;
        if row_count = 0 then
			select show_message('ID DOES NOT EXIST !') into v_result;
            return 2;
        else 
            select * into row_city from cities where ID = id1;
            
            if name1 is null then
                name1 := row_city.NAME;
            end if;
            
            if latitude1 is null then
                latitude1 := row_city.LATITUDE;
            end if;
            
            if longitude1 is null then
                longitude1 := row_city.LONGITUDE;
            end if;
            
            if website1 is null then
                website1 := row_city.WEBSITE;
            end if;
            
            if tel_code1 is null then
                tel_code1 := row_city.TEL_CODE;
            end if;
            
            if zip_code1 is null then
                zip_code1 := row_city.ZIP_CODE;
            end if;
            
            if area_code1 is null then
                area_code1 := row_city.AREA_CODE;
            end if;
            
            if center_district_id1 is null then
                center_district_id1 := row_city.CENTER_DISTRICT_ID;
            ELSE 
                select count(*) into row_count from districts where ID = center_district_id1;
                if row_count = 0 then
					select show_message('CENTER_DISTRICT_ID DOES NOT EXIST !') into v_result;
                    return 3;
                end if;
            end if;
            
            update cities set NAME = name1, LATITUDE = latitude1, LONGITUDE = longitude1, WEBSITE = website1,TEL_CODE = tel_code1,ZIP_CODE = zip_code1,AREA_CODE = area_code1, CENTER_DISTRICT_ID = center_district_id1,
			CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP WHERE ID = id1;
  			select show_message('UPDATING CITIES IS SUCCESSFUL !') into v_result;
            return 0;
        end if;
    end if;
    
    RETURN 0;
END ;
$$ language plpgsql;

create or replace FUNCTION UPDATE_CUSTOMER(id1 in  CUSTOMERS.ID%TYPE, ssn1 in  CUSTOMERS.SSN%TYPE, first_name1 in  CUSTOMERS.FIRST_NAME%TYPE,
last_name1 in  CUSTOMERS.LAST_NAME%TYPE, tel1 in  CUSTOMERS.TEL%TYPE, address1 in  CUSTOMERS.ADDRESS%type, feed_back1 in  CUSTOMERS.FEED_BACK%type) 
RETURNS INTEGER 
AS $$
DECLARE
    row_count_ssn INTEGER := 0;
    row_customer customers%rowtype;
	v_result varchar(250);
BEGIN
	select count(*) into row_count_ssn from customers where id = id1;
    if row_count_ssn = 0 then
		select show_message('ID DOES NOT EXIST !') into v_result;
        return 1;
    else 
		select * into row_customer from customers where ID = id1;
		if ssn1 is null then
			ssn1 := row_customer.SSN;
		ELSE
			select count(*) into row_count_ssn from customers where SSN = ssn1;
			if row_count_ssn > 0 then
				select show_message('DUPLICATE IN SSN !') into v_result;
				return 2;
			end if;
		end if;
		
       	if first_name1 is null then
             first_name1 := row_customer.FIRST_NAME;
        end if;
            
        if last_name1 is null then
             last_name1 := row_customer.LAST_NAME;
        end if;
            
        if tel1 is null then
             tel1 := row_customer.TEL;
        end if;
            
        if address1 is null then
             address1 := row_customer.ADDRESS;
        end if;
            
        if feed_back1 is null then
            feed_back1 := row_customer.FEED_BACK;
        end if;
            
        update customers set SSN = ssn1, FIRST_NAME = first_name1, LAST_NAME = last_name1, TEL = tel1, ADDRESS = address1, FEED_BACK = feed_back1,
			CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP
            where ID = id1;
		select show_message('UPDATING CUSTOMERS IS SUCCESSFUL !') into v_result;
        return 0;
      
    end if;

    RETURN 0;
END ;
$$ language plpgsql;

create or replace FUNCTION UPDATE_DEPARTMENT(ID1 IN  DEPARTMENTS.ID%TYPE, TYPE1 IN  DEPARTMENTS.TYPE%TYPE, NAME1 IN  DEPARTMENTS.NAME%TYPE, MANAGER_ID1 IN 
 DEPARTMENTS.MANAGER_ID%TYPE, OFFICE_ID1 IN  DEPARTMENTS.OFFICE_ID%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
     ROW_COUNT INTEGER := 0;
     ROW_DEPARTMENT DEPARTMENTS%ROWTYPE;
	 v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM DEPARTMENTS WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE
        SELECT * INTO ROW_DEPARTMENT FROM DEPARTMENTS WHERE ID = ID1;
        
        IF TYPE1 IS NULL THEN
            TYPE1 := ROW_DEPARTMENT.TYPE;
        END IF;
        
        IF NAME1 IS NULL THEN
            NAME1 := ROW_DEPARTMENT.NAME;
        END IF;
        
        IF MANAGER_ID1 IS NULL THEN
            MANAGER_ID1 := ROW_DEPARTMENT.MANAGER_ID;
        ELSE
            SELECT COUNT(*) INTO ROW_COUNT FROM MANAGERS WHERE ID = MANAGER_ID1;
            IF ROW_COUNT = 0 THEN
				select show_message('MANAGER_ID DOES NOT EXIST !') into v_result;
                RETURN 2;
            END IF;
        END IF;
        
        IF OFFICE_ID1 IS NULL THEN
            OFFICE_ID1 := ROW_DEPARTMENT.OFFICE_ID;
        ELSE
            SELECT COUNT(*) INTO ROW_COUNT FROM OFFICES WHERE ID = OFFICE_ID1;
            IF ROW_COUNT = 0 THEN
				select show_message('OFFICE_ID DOES NOT EXIST !') into v_result;
                RETURN 3;
            END IF;
        END IF;
        UPDATE DEPARTMENTS SET TYPE = TYPE1, NAME = NAME1, MANAGER_ID = MANAGER_ID1,OFFICE_ID = OFFICE_ID1, CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP 
		WHERE ID = ID1;
        select show_message('UPDATING DEPARTMENTS IS SUCCESSFUL !') into v_result;
    END IF;
    RETURN 0;
END ;
$$ language plpgsql;

create or replace FUNCTION UPDATE_DISTRICT(id1 in  DISTRICTS.ID%TYPE, name1 in  DISTRICTS.NAME%TYPE, latitude1 in  DISTRICTS.LATITUDE%TYPE, 
longitude1 in  DISTRICTS.LONGITUDE%TYPE,website1 in  DISTRICTS.WEBSITE%TYPE, tel1 in  DISTRICTS.TEL%TYPE, city_id1 in  DISTRICTS.CITY_ID%TYPE)
RETURNS INTEGER 
AS $$
DECLARE
    row_count INTEGER := 0;
    row_district DISTRICTS%ROWTYPE;
	v_result varchar(250);
BEGIN
    select count(*) into row_count FROM Districts where ID = id1;
    if row_count = 0 then
		select show_message('ID DOES NOT EXIST !') into v_result;
        return 1;
    else
        select * into row_district from districts where ID = id1;
        
        if name1 is null then 
            name1 := row_district.name;
        end if;
        
        if latitude1 is null then
            latitude1 := row_district.LATITUDE;
        end if;
        
        if longitude1 is null then
            longitude1 := row_district.LONGITUDE;
        end if;
        
        if website1 is null then
            website1 := row_district.WEBSITE;
        end if;
        
        if tel1 is null then
            tel1 := row_district.TEL;
        end if;
        
        if city_id1 is null then
            city_id1 := row_district.CITY_ID;
        else 
            select count(*) into row_count FROM Cities where ID = city_id1;
            if row_count = 0 then
				select show_message('CITY_ID DOES NOT EXIST !') into v_result;
                return 2;
            end if;
        end if;
        
        update districts set name = name1, LATITUDE = latitude1, LONGITUDE = longitude1, WEBSITE = website1, TEL = tel1,CITY_ID = city_id1,
		CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP
        where ID = id1;
        select show_message('UPDATING DISTRICTS IS SUCCESSFUL !') into v_result;
    end if;

    RETURN 0;
END ;
$$ language plpgsql

create or replace FUNCTION UPDATE_DRIVER(ID1 IN DRIVERS.ID%TYPE, LICENSE_NUMBER1 IN  DRIVERS.LICENSE_NUMBER%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
    ROW_DRIVER DRIVERS%ROWTYPE;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM DRIVERS WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE
        SELECT * INTO ROW_DRIVER FROM DRIVERS WHERE ID = ID1;
        IF LICENSE_NUMBER1 IS NULL THEN
            LICENSE_NUMBER1 := ROW_DRIVER.LICENSE_NUMBER;
        ELSE
            SELECT COUNT(*) INTO ROW_COUNT FROM DRIVERS WHERE LICENSE_NUMBER = LICENSE_NUMBER1;
            IF ROW_COUNT > 0 THEN
				select show_message('DUPLICATE IN LICENSE_NUMBER !') into v_result;
                RETURN 2;
            END IF;
        END IF;
        UPDATE DRIVERS SET LICENSE_NUMBER = LICENSE_NUMBER1,CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP 
		WHERE ID = ID1;
       	select show_message('UPDATING DRIVERS IS SUCCESSFUL !') into v_result;
		
    END IF;
    RETURN 0;
END ;
$$ language plpgsql;

create or replace FUNCTION UPDATE_EMPLOYEE(id1 in EMPLOYEES.ID%TYPE, ssn1 in  EMPLOYEES.SSN%TYPE, first_name1 in  EMPLOYEES.FIRST_NAME%TYPE, last_name1 in  EMPLOYEES.LAST_NAME%TYPE,
password1 in  EMPLOYEES.PASSWORD%TYPE, email1 in  EMPLOYEES.EMAIL%TYPE, tel1 in  EMPLOYEES.TEL%TYPE, bank_account1 in  EMPLOYEES.BANK_ACCOUNT%TYPE,
photo_url1 in  EMPLOYEES.PHOTO_URL%TYPE, salary1 in  EMPLOYEES.SALARY%TYPE, address1 in  EMPLOYEES.ADDRESS%TYPE, join_date1 in  EMPLOYEES.JOIN_DATE%TYPE, supervisor_id1 in  EMPLOYEES.SUPERVISOR_ID%TYPE,
department_id1 in  EMPLOYEES.DEPARTMENT_ID%TYPE, role1 in  EMPLOYEES.ROLE%TYPE)
RETURNS INTEGER 
AS $$
DECLARE
   row_count INTEGER := 0;
   row_employee EMPLOYEES%ROWTYPE;
   v_result varchar(250);
BEGIN
    if id1 is null then
		select show_message('ID IS NULL !') into v_result;
        return 1;
    end if;
    select count(*) into row_count from EMPLOYEES where ID = id1;
    if row_count = 0 then
		select show_message('ID DOES NOT EXIST !') into v_result;
        return 2;
    end if;
    select * into row_employee from EMPLOYEES where ID = id1;
    
    if ssn1 is null then
        ssn1 := row_employee.SSN;
    else
        select count(*) into row_count from EMPLOYEES where SSN = ssn1;
        if row_count > 0 then
			select show_message('DUPLICATE IN SSN !') into v_result;
            return 3;
        end if;
    end if;
    
    if first_name1 is null then
        first_name1 := row_employee.FIRST_NAME;
    end if;
    
    if last_name1 is null then
        last_name1 := row_employee.LAST_NAME;
    end if;
    
    if password1 is null then
        password1 := row_employee.PASSWORD;
    end if;
    
    if email1 is null then
        email1 := row_employee.EMAIL;
    else
        select count(*) into row_count from EMPLOYEES where EMAIL = email1;
        if row_count > 0 then
			select show_message('DUPLICATE IN EMAIL !') into v_result;
            return 4;
        end if;
    end if;
  
    if tel1 is null then
        tel1 := row_employee.TEL;
    end if;
  
    if bank_account1 is null then
        bank_account1 := row_employee.BANK_ACCOUNT;
    else
        select count(*) into row_count from EMPLOYEES where BANK_ACCOUNT = bank_account1;
        if row_count > 0 then
			select show_message('DUPLICATE IN BANK_ACCOUNT !') into v_result;
            return 5;
        end if;
    end if;
    
    if photo_url1 is null then
        photo_url1 := row_employee.PHOTO_URL;
    end if;
    
    if salary1 is null then
        salary1 := row_employee.SALARY;
    end if;
    
    if address1 is null then
        address1 := row_employee.ADDRESS;
    end if;
    
    if join_date1 is null then
        join_date1 := row_employee.JOIN_DATE;
    end if;
    
    if supervisor_id1 is null then
        supervisor_id1 := row_employee.SUPERVISOR_ID;
    else
        select count(*) into row_count from EMPLOYEES where ID = supervisor_id1;
        if row_count = 0 then
			select show_message('SUPERVISOR_ID DOES NOT EXIST !') into v_result;
            return 6;
        end if;
    end if;
    
    if department_id1 is null then
        department_id1 := row_employee.DEPARTMENT_ID;
    else
         select count(*) into row_count from DEPARTMENTS where ID = department_id1;
        if row_count = 0 then
			select show_message('DEPARTMENT_ID DOES NOT EXIST !') into v_result;
            return 7;
        end if;
    end if;
    
    if role1 is null then
        role1 := row_employee.ROLE;
    end if;
    
    update EMPLOYEES SET SSN = ssn1, FIRST_NAME = first_name1,LAST_NAME = last_name1, PASSWORD = password1,EMAIL = email1,TEL = tel1,BANK_ACCOUNT = bank_account1,
    PHOTO_URL = photo_url1,SALARY = salary1,ADDRESS = address1,JOIN_DATE = join_date1,
    SUPERVISOR_ID = supervisor_id1,DEPARTMENT_ID = department_id1,ROLE = role1, CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP
    where ID = id1;
    select show_message('UPDATING EMPLOYEES IS SUCCESSFUL !') into v_result;
    RETURN 0;
END ;
$$ language plpgsql;

create or replace FUNCTION UPDATE_LOCATION(ID1 IN LOCATIONS.ID%TYPE, NAME1 IN  LOCATIONS.NAME%TYPE, ADDRESS1 IN  LOCATIONS.ADDRESS%TYPE, LATITUDE1 IN  LOCATIONS.LATITUDE%TYPE
, LONGITUDE1 IN  LOCATIONS.LONGITUDE%TYPE, OPEN_TIME1 IN  LOCATIONS.OPEN_TIME%TYPE, CLOSE_TIME1 IN  LOCATIONS.CLOSE_TIME%TYPE, TEL1 IN  LOCATIONS.TEL%TYPE, DISTRICT_ID1 
IN  LOCATIONS.DISTRICT_ID%TYPE,TYPE1 IN  LOCATIONS.TYPE%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
    ROW_LOCATION LOCATIONS%ROWTYPE;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM LOCATIONS WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE
        SELECT * INTO ROW_LOCATION FROM LOCATIONS WHERE ID = ID1;
        
        IF NAME1 IS NULL THEN
            NAME1 := ROW_LOCATION.NAME;
        END IF;
        
        IF ADDRESS1 IS NULL THEN
            ADDRESS1 := ROW_LOCATION.ADDRESS;
        END IF;
        
        IF LATITUDE1 IS NULL THEN
            LATITUDE1 := ROW_LOCATION.LATITUDE;
        END IF;
        
        IF LONGITUDE1 IS NULL THEN
            LONGITUDE1 := ROW_LOCATION.LONGITUDE;
        END IF;
        
        IF OPEN_TIME1 IS NULL THEN
            OPEN_TIME1 := ROW_LOCATION.OPEN_TIME;
        END IF;
        
        IF CLOSE_TIME1 IS NULL THEN
            CLOSE_TIME1 := ROW_LOCATION.CLOSE_TIME;
        END IF;
        
        IF TEL1 IS NULL THEN
            TEL1 := ROW_LOCATION.TEL;
        END IF;
        
        IF DISTRICT_ID1 IS NULL THEN
            DISTRICT_ID1 := ROW_LOCATION.DISTRICT_ID;
        ELSE 
            SELECT COUNT(*) INTO ROW_COUNT FROM DISTRICTS WHERE ID = DISTRICT_ID1;
            IF ROW_COUNT = 0  THEN
				select show_message('DISTRICT_ID DOES NOT EXIST !') into v_result;
                RETURN 2;
            END IF;
        END IF;
        
        IF TYPE1 IS NULL THEN
            TYPE1 := ROW_LOCATION.TYPE;
        END IF;
        UPDATE LOCATIONS SET NAME = NAME1, ADDRESS = ADDRESS1, LATITUDE = LATITUDE1, LONGITUDE = LONGITUDE1, OPEN_TIME = OPEN_TIME1, CLOSE_TIME = CLOSE_TIME1, TEL = TEL1,
        DISTRICT_ID = DISTRICT_ID1, TYPE = TYPE1, CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP 
        WHERE ID = ID1;
     	select show_message('UPDATING LOCATIONS IS SUCCESSFUL !') into v_result;
    END IF;
    RETURN 0;
END ;
$$ language plpgsql;

create or replace FUNCTION UPDATE_MANAGER(ID1 IN MANAGERS.ID%TYPE, START_DATE1 IN  MANAGERS.START_DATE%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
    ROW_MANAGER MANAGERS%ROWTYPE;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM MANAGERS WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE
        SELECT * INTO ROW_MANAGER FROM MANAGERS WHERE ID = ID1;
        IF START_DATE1 IS NULL THEN
            START_DATE1 := ROW_MANAGER.START_DATE;
        END IF;
        
        UPDATE MANAGERS SET START_DATE = START_DATE1, CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP 
		WHERE ID = ID1;
        select show_message('UPDATING MANAGERS IS SUCCESSFUL !') into v_result;
        
    END IF;
    RETURN 0;
END ;
$$ language plpgsql;

create or replace FUNCTION UPDATE_OFFICE(id1 in  OFFICES.ID%TYPE, name1 in  OFFICES.NAME%TYPE, address1 in  OFFICES.ADDRESS%TYPE, is_headquater1 in  OFFICES.IS_HEADQUATER%TYPE, district_id1 in 
 OFFICES.DISTRICT_ID%TYPE, hotline1 in  OFFICES.HOTLINE%TYPE, latitude1 in  OFFICES.LATITUDE%TYPE,longitude1 in  OFFICES.LONGITUDE%TYPE)
RETURNS INTEGER 
AS $$
DECLARE
     row_count INTEGER := 0;
     row_office OFFICES%ROWTYPE;
	 v_result varchar(250);
BEGIN
    select count(*) into row_count from offices where ID = id1;
    if row_count = 0 then
		select show_message('ID DOES NOT EXIST !') into v_result;
        return 1;
    else
        select * into row_office from offices where ID = id1;
        if name1 is null then
            name1 := row_office.name;
        end if;
        
        if address1 is null then
            address1 := row_office.ADDRESS;
        end if;
        
        if is_headquater1 is null then
            is_headquater1 := row_office.IS_HEADQUATER;
        end if;
        
        if district_id1 is null then
            district_id1 := row_office.DISTRICT_ID;
        else
            select count(*) into row_count from districts where ID = district_id1;
            if row_count = 0 then
				select show_message('DISTRICT_ID DOES NOT EXIST !') into v_result;
                return 2;
            end if;
        end if;
        
        if hotline1 is null then
            hotline1 := row_office.HOTLINE;
        end if;
        
        if latitude1 is null then
            latitude1 := row_office.LATITUDE;
        end if;
        
        if longitude1 is null then
            longitude1 := row_office.LONGITUDE;
        end if;
        
        update offices set NAME = name1, ADDRESS = address1, IS_HEADQUATER = is_headquater1, DISTRICT_ID = district_id1, HOTLINE = hotline1, LATITUDE = latitude1, LONGITUDE = longitude1,
		CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP 
        WHERE ID = id1;
        select show_message('UPDATING OFFICES IS SUCCESSFUL !') into v_result;
    end if;
    
    RETURN 0;
END ;
$$ language plpgsql;

create or replace FUNCTION UPDATE_SELLER(ID1 IN SELLERS.ID%TYPE, EXP_TRANSACTION1 IN  SELLERS.EXP_TRANSACTION%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
    ROW_SELLER SELLERS%ROWTYPE;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM SELLERS WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE
        SELECT * INTO ROW_SELLER FROM SELLERS WHERE ID = ID1;
        IF EXP_TRANSACTION1 IS NULL THEN
            EXP_TRANSACTION1 := ROW_SELLER.EXP_TRANSACTION;
        END IF;
        update sellers set EXP_TRANSACTION = EXP_TRANSACTION1, CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP  
		WHERE ID = ID1;
        select show_message('UPDATING SELLERS IS SUCCESSFUL !') into v_result;
        
    END IF;
    RETURN 0;
END ;
$$ language plpgsql;

create or replace FUNCTION UPDATE_TICKET(ID1 IN TICKETS.ID%TYPE, CODE1 IN  TICKETS.CODE%TYPE, TRANSACTION_ID1 IN  TICKETS.TRANSACTION_ID%TYPE,
TRIP_ID1 IN  TICKETS.TRIP_ID%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
    ROW_TICKET TICKETS%ROWTYPE;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM TICKETS WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN 
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE
        SELECT * INTO ROW_TICKET FROM TICKETS WHERE ID = ID1;
        
        IF CODE1 IS NULL THEN
            CODE1 := ROW_TICKET.CODE;
        END IF;
        
        IF TRANSACTION_ID1 IS NULL THEN
            TRANSACTION_ID1 := ROW_TICKET.TRANSACTION_ID;
        ELSE
            SELECT COUNT(*) INTO ROW_COUNT FROM TRANSACTIONS WHERE ID = TRANSACTION_ID1;
            IF ROW_COUNT = 0 THEN
				select show_message('TRANSACTION_ID DOES NOT EXIST !') into v_result;
                RETURN 2;
            END IF;
        END IF;
        
        IF TRIP_ID1 IS NULL THEN
            TRIP_ID1 := ROW_TICKET.TRIP_ID;
        ELSE
            SELECT COUNT(*) INTO ROW_COUNT FROM TRIPS WHERE ID = TRIP_ID1;
            IF ROW_COUNT = 0 THEN
				select show_message('TRIP_ID DOES NOT EXIST !') into v_result;
                RETURN 3;
            END IF;
        END IF;
        
        UPDATE TICKETS SET CODE = CODE1 , TRANSACTION_ID = TRANSACTION_ID1, TRIP_ID = TRIP_ID1, CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP  
		WHERE ID = ID1;
        select show_message('UPDATING TICKETS IS SUCCESSFUL !') into v_result;
        
    END IF;
    RETURN 0;
END ;
$$ language plpgsql;

create or replace FUNCTION UPDATE_TRANSACTION(ID1 IN TRANSACTIONS.ID%TYPE, CODE1 IN  TRANSACTIONS.CODE%TYPE, TIMESTAMP1 IN  TRANSACTIONS.TIMESTAMP%TYPE, 
CUSTOMER_ID1 IN  TRANSACTIONS.CUSTOMER_ID%TYPE,SELLER_ID1 IN  TRANSACTIONS.SELLER_ID%TYPE, 
TOTAL_PRICE1 IN  TRANSACTIONS.TOTAL_PRICE%TYPE, PAYMENT_METHOD1 IN TRANSACTIONS.PAYMENT_METHOD%TYPE, STATUS1 IN  TRANSACTIONS.STATUS%TYPE)
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
    ROW_TRANSACTION TRANSACTIONS%ROWTYPE;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM TRANSACTIONS WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE
        SELECT * INTO ROW_TRANSACTION FROM TRANSACTIONS WHERE ID = ID1;
        
        IF CODE1 IS NULL THEN 
            CODE1 := ROW_TRANSACTION.CODE;
        END IF;
        
        IF TIMESTAMP1 IS NULL THEN 
            TIMESTAMP1 := ROW_TRANSACTION.TIMESTAMP;
        END IF;
        
        IF CUSTOMER_ID1 IS NULL THEN 
            CUSTOMER_ID1 := ROW_TRANSACTION.CUSTOMER_ID;
        ELSE
            SELECT COUNT(*) INTO ROW_COUNT FROM CUSTOMERS WHERE ID = CUSTOMER_ID1;
            IF ROW_COUNT = 0 THEN
				select show_message('CUSTOMER_ID DOES NOT EXIST !') into v_result;
                RETURN 2;
            END IF;
        END IF;
        
        IF SELLER_ID1 IS NULL THEN 
            SELLER_ID1 := ROW_TRANSACTION.SELLER_ID;
        ELSE
            SELECT COUNT(*) INTO ROW_COUNT FROM SELLERS WHERE ID = SELLER_ID1;
            IF ROW_COUNT = 0 THEN
				select show_message('SELLER_ID DOES NOT EXIST !') into v_result;
                RETURN 3;
            END IF;
        END IF;
        
        IF TOTAL_PRICE1 IS NULL THEN 
            TOTAL_PRICE1 := ROW_TRANSACTION.TOTAL_PRICE;
        END IF;
        
        IF PAYMENT_METHOD1 IS NULL THEN 
            PAYMENT_METHOD1 := ROW_TRANSACTION.PAYMENT_METHOD;
        END IF;
        
        IF STATUS1 IS NULL THEN 
            STATUS1 := ROW_TRANSACTION.STATUS;
        END IF;
        
        UPDATE TRANSACTIONS SET CODE = CODE1 , TIMESTAMP =  TIMESTAMP1, CUSTOMER_ID = CUSTOMER_ID1, SELLER_ID = SELLER_ID1,
        TOTAL_PRICE = TOTAL_PRICE1, PAYMENT_METHOD = PAYMENT_METHOD1, STATUS = STATUS1, CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP 
		WHERE ID = ID1;
       	select show_message('UPDATING TRANSACTIONS IS SUCCESSFUL !') into v_result;
        
        
    END IF;
    RETURN 0;
END ;
$$ language plpgsql;

create or replace FUNCTION UPDATE_TRIP(ID1 IN TRIPS.ID%TYPE, TRIP_DAILY_ID1 IN  TRIPS.TRIP_DAILY_ID%TYPE, DEPART_DATE1 IN  TRIPS.DEPART_DATE%TYPE,
BUS_ID1 IN  TRIPS.BUS_ID%TYPE, DRIVER_ID1 IN  TRIPS.DRIVER_ID%TYPE, ASSISTANT_ID1 IN  TRIPS.ASSISTANT_ID%TYPE, IS_COMPLETE1 IN  TRIPS.IS_COMPLETE%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
    ROW_TRIP TRIPS%ROWTYPE;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM TRIPS WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE 
        SELECT * INTO ROW_TRIP FROM TRIPS WHERE ID = ID1;
        IF TRIP_DAILY_ID1 IS NULL THEN
            TRIP_DAILY_ID1 := ROW_TRIP.TRIP_DAILY_ID;
        ELSE
            SELECT COUNT(*) INTO ROW_COUNT FROM TRIP_DAILIES WHERE ID = TRIP_DAILY_ID1;
            IF ROW_COUNT = 0 THEN
				select show_message('TRIP_DAILY_ID DOES NOT EXIST !') into v_result;
                RETURN 2;
            END IF;
        END IF;
        
        IF DEPART_DATE1 IS NULL THEN
            DEPART_DATE1 := ROW_TRIP.DEPART_DATE;
        END IF;
        
        IF BUS_ID1 IS NULL THEN
            BUS_ID1 := ROW_TRIP.BUS_ID;
        ELSE
            SELECT COUNT(*) INTO ROW_COUNT FROM BUSES WHERE ID = BUS_ID1;
            IF ROW_COUNT = 0 THEN
				select show_message('BUS_ID DOES NOT EXIST !') into v_result;
                RETURN 3;
            END IF;
        END IF;
        
        IF DRIVER_ID1 IS NULL THEN
            DRIVER_ID1 := ROW_TRIP.DRIVER_ID;
        ELSE 
            SELECT COUNT(*) INTO ROW_COUNT FROM DRIVERS WHERE ID = DRIVER_ID1;
            IF ROW_COUNT = 0 THEN
				select show_message('DRIVER_ID DOES NOT EXIST !') into v_result;
                RETURN 4;
            END IF;
        END IF;
        
        IF ASSISTANT_ID1 IS NULL THEN
            ASSISTANT_ID1 := ROW_TRIP.ASSISTANT_ID;
        ELSE
            SELECT COUNT(*) INTO ROW_COUNT FROM ASSISTANTS WHERE ID = ASSISTANT_ID1;
            IF ROW_COUNT = 0 THEN
				select show_message('ASSISTANT_ID DOES NOT EXIST !') into v_result;
                RETURN 5;
            END IF;
        END IF;
        
        IF IS_COMPLETE1 IS NULL THEN
            IS_COMPLETE1 := ROW_TRIP.IS_COMPLETE;
        END IF;
        
        UPDATE TRIPS SET TRIP_DAILY_ID = TRIP_DAILY_ID1, DEPART_DATE = DEPART_DATE1, BUS_ID = BUS_ID1,
        DRIVER_ID = DRIVER_ID1, ASSISTANT_ID = ASSISTANT_ID1, IS_COMPLETE = IS_COMPLETE1, CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP 
		WHERE ID = ID1;
        select show_message('UPDATING TRIPS IS SUCCESSFUL !') into v_result;
    END IF;
    RETURN 0;
END ;
$$ language plpgsql;

create or replace FUNCTION UPDATE_TRIP_DAILY(ID1 IN TRIP_DAILIES.ID%TYPE , NAME1 IN TRIP_DAILIES.NAME%TYPE, DEPART_STATION_ID1 IN TRIP_DAILIES.DEPART_STATION_ID%TYPE,ARRIVE_STATION_ID1 IN 
 TRIP_DAILIES.ARRIVE_STATION_ID%TYPE , DEPART_TIME1 IN  TRIP_DAILIES.DEPART_TIME%TYPE, ARRIVE_TIME1 IN TRIP_DAILIES.ARRIVE_TIME%TYPE,
DURATION1 IN  TRIP_DAILIES.DURATION%TYPE, PRICE1 IN TRIP_DAILIES.PRICE%TYPE, DISTANCE1 IN TRIP_DAILIES.DISTANCE%TYPE, HOTLINE1 IN TRIP_DAILIES.HOTLINE%TYPE
, BUS_TYPE_ID1 IN TRIP_DAILIES.BUS_TYPE_ID%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
    ROW_TRIP_DAILY TRIP_DAILIES%ROWTYPE;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM TRIP_DAILIES WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE
        SELECT * INTO ROW_TRIP_DAILY FROM TRIP_DAILIES WHERE ID = ID1;
        
        IF NAME1 IS NULL THEN
            NAME1 := ROW_TRIP_DAILY.NAME;
        END IF;
        
        IF DEPART_STATION_ID1 IS NULL THEN
            DEPART_STATION_ID1 := ROW_TRIP_DAILY.DEPART_STATION_ID;
        ELSE
            SELECT COUNT(*) INTO ROW_COUNT FROM BUS_STATIONS WHERE ID = DEPART_STATION_ID1;
            IF ROW_COUNT = 0 THEN
				select show_message('DEPART_STATION_ID DOES NOT EXIST !') into v_result;
                RETURN 2;
            END IF;
        END IF;
        
        IF ARRIVE_STATION_ID1 IS NULL THEN
            ARRIVE_STATION_ID1 := ROW_TRIP_DAILY.ARRIVE_STATION_ID;
        ELSE 
             SELECT COUNT(*) INTO ROW_COUNT FROM BUS_STATIONS WHERE ID = ARRIVE_STATION_ID1;
            IF ROW_COUNT = 0 THEN
				select show_message('ARRIVE_STATION_ID DOES NOT EXIST !') into v_result;
                RETURN 3;
            END IF;
        END IF;
        
        IF DEPART_TIME1 IS NULL THEN
            DEPART_TIME1 := ROW_TRIP_DAILY.DEPART_TIME;
        END IF;
        
        IF ARRIVE_TIME1 IS NULL THEN
            ARRIVE_TIME1 := ROW_TRIP_DAILY.ARRIVE_TIME;
        END IF;
        
        IF DURATION1 IS NULL THEN
            DURATION1 := ROW_TRIP_DAILY.DURATION;
        END IF;
        
        IF PRICE1 IS NULL THEN
            PRICE1 := ROW_TRIP_DAILY.PRICE;
        END IF;
        
        IF DISTANCE1 IS NULL THEN
            DISTANCE1 := ROW_TRIP_DAILY.DISTANCE;
        END IF;
        
        IF HOTLINE1 IS NULL THEN
            HOTLINE1 := ROW_TRIP_DAILY.HOTLINE;
        END IF;
        
        IF BUS_TYPE_ID1 IS NULL THEN
            BUS_TYPE_ID1 := ROW_TRIP_DAILY.BUS_TYPE_ID;
        ELSE
            SELECT COUNT(*) INTO ROW_COUNT FROM BUS_TYPES WHERE ID = BUS_TYPE_ID1;
            IF ROW_COUNT = 0 THEN
				select show_message('BUS_TYPE_ID DOES NOT EXIST !') into v_result;
                RETURN 4;
            END IF;
        END IF;
        
        UPDATE TRIP_DAILIES SET NAME = NAME1, DEPART_STATION_ID = DEPART_STATION_ID1, ARRIVE_STATION_ID = ARRIVE_STATION_ID1,
        DEPART_TIME = DEPART_TIME1, ARRIVE_TIME = ARRIVE_TIME1 ,DURATION = DURATION1,
        PRICE = PRICE1, DISTANCE = DISTANCE1, HOTLINE = HOTLINE1, BUS_TYPE_ID = BUS_TYPE_ID1, CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP  
		WHERE ID = ID1;
        select show_message('UPDATING TRIP_DAILIES IS SUCCESSFUL !') into v_result;
        
    END IF;
    RETURN 0;
END ;
$$ language plpgsql;



CREATE OR REPLACE FUNCTION trigger_func_insert_employee()
RETURNS trigger AS
$BODY$
BEGIN
 IF NEW.ROLE = 'manager' then
        insert into managers values(new.ID,new.JOIN_DATE,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
    elsif NEW.ROLE = 'seller' then
        insert into sellers values(new.ID,0,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
    elsif NEW.ROLE = 'driver' then
        insert into drivers values(new.ID,0,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
    elsif NEW.ROLE = 'assistant' then
        insert into assistants values(new.ID,'null',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
   	end if;
RETURN NEW;
END;
$BODY$ language plpgsql;

CREATE OR REPLACE FUNCTION trigger_func_insert_location()
RETURNS trigger AS
$BODY$
BEGIN
	if new.TYPE = 'bus' then
        insert into BUS_STATIONS VALUES(new.ID,current_date,'null',current_timestamp,current_timestamp);
    elsif new.TYPE = 'repair' then
        insert into REPAIR_STATIONS VALUES(new.ID,'null',0,current_timestamp,current_timestamp);
    end if;
RETURN NEW;
END;
$BODY$ language plpgsql;

CREATE OR REPLACE FUNCTION trigger_func_update_employee()
RETURNS trigger AS
$BODY$
BEGIN
	IF NEW.ROLE != OLD.ROLE THEN 
        CASE NEW.ROLE
            WHEN 'manager' then
            insert into managers values(new.ID,new.JOIN_DATE,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
            WHEN 'driver' then
            insert into DRIVERS values(new.ID,0,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
            when 'seller' then
            insert into SELLERS values(new.ID,0,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
            ELSE
            insert into ASSISTANTS values(new.ID,'null',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
        END CASE;
        CASE OLD.ROLE
            WHEN 'manager' then
            delete from managers where id = old.ID;
            WHEN 'driver' then
            delete from DRIVERS where id = old.ID;
            when 'seller' then
            delete from SELLERS where id = old.ID;
            --when 'assistant' then
            else
            delete from ASSISTANTS where id = old.ID;
        END CASE;
    END IF;
RETURN NEW;
END;
$BODY$ language plpgsql;

CREATE OR REPLACE FUNCTION trigger_func_update_location()
RETURNS trigger AS
$BODY$
BEGIN
	IF NEW.TYPE != OLD.TYPE THEN 
        CASE NEW.TYPE
            WHEN 'bus' then
                insert into BUS_STATIONS VALUES(new.ID,current_date,'null',current_timestamp,current_timestamp);
          	else 
                insert into REPAIR_STATIONS VALUES(new.ID,'null',0,current_timestamp,current_timestamp);
        END CASE;
        CASE OLD.TYPE
            WHEN 'bus' then
                delete from bus_stations where id = old.ID;
           	else 
                delete from REPAIR_STATIONS where id = old.ID;
        END CASE;
    END IF;
RETURN NEW;
END;
$BODY$ language plpgsql;

CREATE TRIGGER TRIGGER_INSERT_EMPLOYEE
AFTER INSERT ON employees
FOR EACH ROW
EXECUTE PROCEDURE trigger_func_insert_employee();

CREATE TRIGGER TRIGGER_INSERT_LOCATION
AFTER INSERT ON LOCATIONS
FOR EACH ROW
EXECUTE PROCEDURE trigger_func_insert_location();

CREATE TRIGGER TRIGGER_UPDATE_EMPLOYEE
AFTER UPDATE of ROLE ON EMPLOYEES
FOR EACH ROW
EXECUTE PROCEDURE trigger_func_update_employee();

CREATE TRIGGER TRIGGER_UPDATE_LOCATION
AFTER UPDATE of TYPE ON LOCATIONS
FOR EACH ROW
EXECUTE PROCEDURE trigger_func_update_location();



