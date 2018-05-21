create or replace FUNCTION DELETE_LOCATION(ID1 IN LOCATIONS.ID%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM LOCATIONS WHERE ID = ID1;
    IF ROW_COUNT = 0 THEN
		select show_message('ID DOES NOT EXIST !') into v_result;
        RETURN 1;
    ELSE
        DELETE FROM LOCATIONS WHERE ID = ID1;
        select show_message('DELETING A LOCATION IS SUCCESSFUL !') into v_result;
    END IF;
    RETURN 0;
END ;
$$ language plpgsql