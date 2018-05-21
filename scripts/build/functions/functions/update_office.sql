create or replace FUNCTION UPDATE_OFFICE(id1 in  OFFICES.ID%TYPE, name1 in  OFFICES.NAME%TYPE, address1 in  OFFICES.ADDRESS%TYPE, is_headquater1 in  OFFICES.IS_HEADQUATER%TYPE, district_id1 in 
 OFFICES.DISTRICT_ID%TYPE, hotline1 in  OFFICES.HOTLINE%TYPE, latitude1 in  OFFICES.LATITUDE%TYPE,longitude1 in  OFFICES.LONGITUDE%TYPE)
RETURNS INTEGER 
AS $$
DECLARE
     row_count INTEGER := 0;
     row_office OFFICES%ROWTYPE;
	 v_result varchar(250);
BEGIN
    select count(*) into row_count from offices where ID = id1;
    if row_count = 0 then
		select show_message('ID DOES NOT EXIST !') into v_result;
        return 1;
    else
        select * into row_office from offices where ID = id1;
        if name1 is null then
            name1 := row_office.name;
        end if;
        
        if address1 is null then
            address1 := row_office.ADDRESS;
        end if;
        
        if is_headquater1 is null then
            is_headquater1 := row_office.IS_HEADQUATER;
        end if;
        
        if district_id1 is null then
            district_id1 := row_office.DISTRICT_ID;
        else
            select count(*) into row_count from districts where ID = district_id1;
            if row_count = 0 then
				select show_message('DISTRICT_ID DOES NOT EXIST !') into v_result;
                return 2;
            end if;
        end if;
        
        if hotline1 is null then
            hotline1 := row_office.HOTLINE;
        end if;
        
        if latitude1 is null then
            latitude1 := row_office.LATITUDE;
        end if;
        
        if longitude1 is null then
            longitude1 := row_office.LONGITUDE;
        end if;
        
        update offices set NAME = name1, ADDRESS = address1, IS_HEADQUATER = is_headquater1, DISTRICT_ID = district_id1, HOTLINE = hotline1, LATITUDE = latitude1, LONGITUDE = longitude1,
		CREATED_AT = CREATED_AT, UPDATED_AT = CURRENT_TIMESTAMP 
        WHERE ID = id1;
        select show_message('UPDATING OFFICES IS SUCCESSFUL !') into v_result;
    end if;
    
    RETURN 0;
END ;
$$ language plpgsql;