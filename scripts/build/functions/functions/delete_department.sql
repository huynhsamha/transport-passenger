create or replace FUNCTION DELETE_DEPARTMENT(ID1 IN DEPARTMENTS.ID%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM DEPARTMENTS WHERE ID = ID1;
    if row_count  = 0 then
		select show_message('ID DOES NOT EXIST !') into v_result;
        return 1;
    else 
        delete from DEPARTMENTS where ID = id1;
       	select show_message('DELETING A DEPARTMENT IS SUCCESSFUL !') into v_result;
    end if;
    RETURN 0;
END ;
$$ language plpgsql