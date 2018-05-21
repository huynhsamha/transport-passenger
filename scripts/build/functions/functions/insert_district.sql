create or replace FUNCTION INSERT_DISTRICT(id1 in DISTRICTS.ID%TYPE, name1 in DISTRICTS.NAME%TYPE, latitude1 in DISTRICTS.LATITUDE%TYPE, 
longitude1 in DISTRICTS.LONGITUDE%TYPE,website1 in DISTRICTS.WEBSITE%TYPE, tel1 in DISTRICTS.TEL%TYPE, city_id1 in DISTRICTS.CITY_ID%TYPE,CREATED_AT1 IN TIMESTAMP with time zone, UPDATED_AT1 IN TIMESTAMP with time zone)
RETURNS INTEGER 
AS $$
DECLARE
    row_count INTEGER := 0;
	v_result varchar(250);
BEGIN
    select count(*) into row_count FROM DISTRICTS where ID = id1;
    if row_count > 0 then
		select show_message('Duplicate of ID !') into v_result;
        return 1;
    else 
        select count(*) into row_count FROM CITIES where ID = city_id1;
        if row_count = 0 then
			select show_message('CITY_ID DOES NOT EXIST !') into v_result;
            return 2;
        else
            insert into DISTRICTS values(id1,name1,latitude1,longitude1,website1,tel1,city_id1,CREATED_AT1,UPDATED_AT1);
 			select show_message('Inserting DISTRICTS is successful !') into v_result;
        end if;
    end if;
    RETURN 0;
END;
$$ language plpgsql;


