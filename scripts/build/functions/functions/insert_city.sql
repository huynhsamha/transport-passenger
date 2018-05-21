create or replace FUNCTION INSERT_CITY(id1 in CITIES.ID%type, name1 in CITIES.NAME%type, latitude1 in CITIES.LATITUDE%type, longitude1 in CITIES.LONGITUDE%type, 
website1 in CITIES.WEBSITE%type,tel_code1 in CITIES.TEL_CODE%type,zip_code1 in CITIES.ZIP_CODE%type, area_code1 in CITIES.AREA_CODE%type, CREATED_AT1 IN TIMESTAMP with time zone, UPDATED_AT1 IN TIMESTAMP with time zone)
RETURNS INTEGER 
AS $$
DECLARE
    row_count INTEGER := 0;
	v_result varchar(250);
BEGIN
    select count(*) into row_count from CITIES where ID = id1;
    if row_count > 0 then
		select show_message('Duplicate of ID !') into v_result;
        return 1;
    else
        insert into CITIES values (id1,name1,latitude1,longitude1,website1,tel_code1,zip_code1,area_code1,CREATED_AT1,UPDATED_AT1);
        select show_message('Inserting CITIES is successful !') into v_result;
		return 0;
    end if;
  
    RETURN 0;
END;
$$ language plpgsql;