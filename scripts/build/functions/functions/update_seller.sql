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