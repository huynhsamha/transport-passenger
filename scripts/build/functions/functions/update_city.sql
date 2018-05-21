create or replace FUNCTION UPDATE_CITY(id1 in  CITIES.ID%type, name1 in  CITIES.NAME%type, latitude1 in  CITIES.LATITUDE%type, longitude1 in  CITIES.LONGITUDE%type, 
website1 in  CITIES.WEBSITE%type,tel_code1 in  CITIES.TEL_CODE%type,zip_code1 in  CITIES.ZIP_CODE%type, area_code1 in  CITIES.AREA_CODE%type, center_district_id1 in  CITIES.CENTER_DISTRICT_ID%type)
RETURNS INTEGER 
AS $$
DECLARE
    row_count INTEGER := 0;
    row_city CITIES%ROWTYPE;
	v_result varchar(250);
BEGIN
    IF id1 is null then
		select show_message('ID IS NULL !') into v_result;
        return 1;
    else
        select count(*) into row_count from cities where ID = id1;
        if row_count = 0 then
			select show_message('ID DOES NOT EXIST !') into v_result;
            return 2;
        else 
            select * into row_city from cities where ID = id1;
            
            if name1 is null then
                name1 := row_city.NAME;
            end if;
            
            if latitude1 is null then
                latitude1 := row_city.LATITUDE;
            end if;
            
            if longitude1 is null then
                longitude1 := row_city.LONGITUDE;
            end if;
            
            if website1 is null then
                website1 := row_city.WEBSITE;
            end if;
            
            if tel_code1 is null then
                tel_code1 := row_city.TEL_CODE;
            end if;
            
            if zip_code1 is null then
                zip_code1 := row_city.ZIP_CODE;
            end if;
            
            if area_code1 is null then
                area_code1 := row_city.AREA_CODE;
            end if;
            
            if center_district_id1 is null then
                center_district_id1 := row_city.CENTER_DISTRICT_ID;
            ELSE 
                select count(*) into row_count from districts where ID = center_district_id1;
                if row_count = 0 then
					select show_message('CENTER_DISTRICT_ID DOES NOT EXIST !') into v_result;
                    return 3;
                end if;
            end if;
            
            update cities set NAME = name1, LATITUDE = latitude1, LONGITUDE = longitude1, WEBSITE = website1,TEL_CODE = tel_code1,ZIP_CODE = zip_code1,AREA_CODE = area_code1, CENTER_DISTRICT_ID = center_district_id1,
			CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP WHERE ID = id1;
  			select show_message('UPDATING CITIES IS SUCCESSFUL !') into v_result;
            return 0;
        end if;
    end if;
    
    RETURN 0;
END ;
$$ language plpgsql;