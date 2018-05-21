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