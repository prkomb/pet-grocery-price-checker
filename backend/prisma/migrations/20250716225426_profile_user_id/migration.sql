-- AlterTable
CREATE SEQUENCE profile_id_seq;
ALTER TABLE "Profile" ALTER COLUMN "id" SET DEFAULT nextval('profile_id_seq'),
ADD CONSTRAINT "Profile_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE profile_id_seq OWNED BY "Profile"."id";
