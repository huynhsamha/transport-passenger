create or replace FUNCTION INSERT_DEPARTMENT(ID1 IN DEPARTMENTS.ID%TYPE, TYPE1 IN DEPARTMENTS.TYPE%TYPE, NAME1 IN DEPARTMENTS.NAME%TYPE, MANAGER_ID1 IN 
DEPARTMENTS.MANAGER_ID%TYPE, OFFICE_ID1 IN DEPARTMENTS.OFFICE_ID%TYPE,CREATED_AT1 IN TIMESTAMP with time zone, UPDATED_AT1 IN TIMESTAMP with time zone)
RETURNS INTEGER
AS $$
DECLARE
    ROW_COUNT INTEGER := 0;
	v_result varchar(250);
BEGIN
    SELECT COUNT(*) INTO ROW_COUNT FROM DEPARTMENTS WHERE ID = ID1;
    IF ROW_COUNT > 0 THEN
		select show_message('Duplicate of ID !') into v_result;
        RETURN 1;
    ELSE
        SELECT COUNT(*) INTO ROW_COUNT FROM MANAGERS WHERE ID = MANAGER_ID1;
        IF ROW_COUNT = 0 THEN
			select show_message('MANAGER_ID DOES NOT EXIST !') into v_result;
            RETURN 2;
        ELSE 
            SELECT COUNT(*) INTO ROW_COUNT FROM OFFICES WHERE ID = OFFICE_ID1;
            IF ROW_COUNT = 0 THEN
				select show_message('OFFICE_ID DOES NOT EXIST !') into v_result;
                RETURN 3;
            ELSE
                INSERT INTO DEPARTMENTS VALUES(ID1,TYPE1,NAME1,MANAGER_ID1,OFFICE_ID1,CREATED_AT1,UPDATED_AT1);
				select show_message('Inserting DEPARTMENTS is successful !') into v_result;
            END IF;
        END IF;
    END IF;
    RETURN 0;
END;
$$ language plpgsql;