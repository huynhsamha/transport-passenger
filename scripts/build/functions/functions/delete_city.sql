create or replace FUNCTION DELETE_CITY(id1 in CITIES.ID%TYPE)
RETURNS INTEGER 
AS $$
DECLARE
    row_count INTEGER := 0;
	v_result varchar(250);
BEGIN
    select count(*) into row_count from cities where ID = id1;
    if row_count = 0 then
		select show_message('ID DOES NOT EXIST !') into v_result;
        return 1;
    else
        delete from cities where ID = id1;
        select show_message('DELETING A CITY IS SUCCESSFUL !') into v_result;
    end if;
    RETURN 0;
END ;
$$ language plpgsql