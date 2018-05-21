create or replace FUNCTION UPDATE_DISTRICT(id1 in  DISTRICTS.ID%TYPE, name1 in  DISTRICTS.NAME%TYPE, latitude1 in  DISTRICTS.LATITUDE%TYPE, 
longitude1 in  DISTRICTS.LONGITUDE%TYPE,website1 in  DISTRICTS.WEBSITE%TYPE, tel1 in  DISTRICTS.TEL%TYPE, city_id1 in  DISTRICTS.CITY_ID%TYPE)
RETURNS INTEGER 
AS $$
DECLARE
    row_count INTEGER := 0;
    row_district DISTRICTS%ROWTYPE;
	v_result varchar(250);
BEGIN
    select count(*) into row_count FROM Districts where ID = id1;
    if row_count = 0 then
		select show_message('ID DOES NOT EXIST !') into v_result;
        return 1;
    else
        select * into row_district from districts where ID = id1;
        
        if name1 is null then 
            name1 := row_district.name;
        end if;
        
        if latitude1 is null then
            latitude1 := row_district.LATITUDE;
        end if;
        
        if longitude1 is null then
            longitude1 := row_district.LONGITUDE;
        end if;
        
        if website1 is null then
            website1 := row_district.WEBSITE;
        end if;
        
        if tel1 is null then
            tel1 := row_district.TEL;
        end if;
        
        if city_id1 is null then
            city_id1 := row_district.CITY_ID;
        else 
            select count(*) into row_count FROM Cities where ID = city_id1;
            if row_count = 0 then
				select show_message('CITY_ID DOES NOT EXIST !') into v_result;
                return 2;
            end if;
        end if;
        
        update districts set name = name1, LATITUDE = latitude1, LONGITUDE = longitude1, WEBSITE = website1, TEL = tel1,CITY_ID = city_id1,
		CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP
        where ID = id1;
        select show_message('UPDATING DISTRICTS IS SUCCESSFUL !') into v_result;
    end if;

    RETURN 0;
END ;
$$ language plpgsql