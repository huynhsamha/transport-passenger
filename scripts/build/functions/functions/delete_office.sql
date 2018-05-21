create or replace FUNCTION DELETE_OFFICE(id1 in OFFICES.ID%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    row_count INTEGER := 0;
	v_result varchar(250);
BEGIN
    select count(*) into row_count from offices where ID = id1;
    if row_count  = 0 then
		select show_message('ID DOES NOT EXIST !') into v_result;
        return 1;
    else 
        delete from offices where ID = id1;
        select show_message('DELETING A OFFICE IS SUCCESSFUL !') into v_result;
    end if;
    RETURN 0;
END ;
$$ language plpgsql