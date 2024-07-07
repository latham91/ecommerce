-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "id" SET DEFAULT generate_custom_id('PD'::text, 1::smallint, 5::smallint);
