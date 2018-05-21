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