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