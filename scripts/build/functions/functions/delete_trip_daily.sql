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