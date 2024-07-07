CREATE OR REPLACE FUNCTION generate_custom_id(prefix text, start_value smallint, padding_length smallint) RETURNS text AS $$
DECLARE
    new_value smallint;
    formatted_id text;
BEGIN
    SELECT max(CAST(SUBSTRING(id, length(prefix) + 1) AS smallint)) INTO new_value FROM "Product"; -- Change "Product" to the actual table name
    
    IF new_value IS NULL THEN
        new_value := start_value;
    ELSE
        new_value := new_value + 1;
    END IF;
    
    formatted_id := prefix || lpad(new_value::text, padding_length, '0');
    
    RETURN formatted_id;
END;
$$ LANGUAGE PLPGSQL VOLATILE;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "id" SET DEFAULT generate_custom_id('PD'::text, 1::smallint, 5::smallint);
