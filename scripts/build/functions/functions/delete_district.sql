create or replace FUNCTION DELETE_DISTRICT(id1 in DISTRICTS.ID%TYPE)
RETURNS INTEGER 
AS $$
DECLARE
    row_count INTEGER := 0;
	v_result varchar(250);
BEGIN
    select count(*) into row_count FROM Districts where ID = id1;
    if row_count = 0 then
		select show_message('ID DOES NOT EXIST !') into v_result;
        return 1;
    else
        delete from districts where ID = id1;
        select show_message('DELETING A DISTRICT IS SUCCESSFUL !') into v_result;
    end if;
    
    RETURN 0;
END ;
$$ language plpgsql