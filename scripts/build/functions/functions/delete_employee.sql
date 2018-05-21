create or replace FUNCTION DELETE_EMPLOYEE(id1 EMPLOYEES.ID%TYPE) 
RETURNS INTEGER 
AS $$
DECLARE
    row_count INTEGER := 0;
	v_result varchar(250);
BEGIN
    select count(*) into row_count from employees where ID = id1;
    if row_count = 0 then
		select show_message('ID DOES NOT EXIST !') into v_result;
        return 1;
    else
        delete from employees where ID = id1;
        select show_message('DELETING A EMPLOYEE IS SUCCESSFUL !') into v_result;
        return 0;
    end if;
    RETURN 0;
END ;
$$ language plpgsql