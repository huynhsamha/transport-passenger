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
