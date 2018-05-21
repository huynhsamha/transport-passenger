create or replace FUNCTION DELETE_TRIP(ID1 IN TRIPS.ID%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM TRIPS WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE
        DELETE FROM TRIPS WHERE ID = ID1;
        select show_message('DELETING A TRIP IS SUCCESSFUL !') into v_result;
    END IF;
    RETURN 0;
END ;
$$ language plpgsql