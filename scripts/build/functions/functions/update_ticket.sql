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