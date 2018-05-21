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