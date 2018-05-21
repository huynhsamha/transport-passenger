create or replace FUNCTION INSERT_OFFICE(id1 in OFFICES.ID%TYPE, name1 in OFFICES.NAME%TYPE, address1 in OFFICES.ADDRESS%TYPE, is_headquater1 in OFFICES.IS_HEADQUATER%TYPE, district_id1 in 
OFFICES.DISTRICT_ID%TYPE, hotline1 in OFFICES.HOTLINE%TYPE, latitude1 in OFFICES.LATITUDE%TYPE,longitude1 in OFFICES.LONGITUDE%TYPE,CREATED_AT1 IN TIMESTAMP with time zone, UPDATED_AT1 IN TIMESTAMP with time zone) 
RETURNS INTEGER 
AS $$
DECLARE
    row_count INTEGER := 0;
	v_result varchar(250);
BEGIN
    select count(*) into row_count from offices where ID = id1;
    if row_count > 0 then
		select show_message('Duplicate of ID !') into v_result;
        return 1;
    else
        select count(*) into row_count from districts where ID = district_id1;
        if row_count = 0 then
			select show_message('DISTRICT_ID DOES NOT EXIST !') into v_result;
            return 2;
        else
            insert into offices values(id1,name1,address1,is_headquater1,district_id1,hotline1,latitude1,longitude1,CREATED_AT1,UPDATED_AT1);
            select show_message('Inserting OFFICES is successful !') into v_result;
        end if;
    end if;
    
    RETURN 0;
END;
$$ language plpgsql;