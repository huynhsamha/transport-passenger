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