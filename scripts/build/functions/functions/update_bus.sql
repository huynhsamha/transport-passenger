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