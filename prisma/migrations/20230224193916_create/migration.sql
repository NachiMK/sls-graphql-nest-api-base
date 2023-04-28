-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

create extension if not exists "uuid-ossp";

with CTEUser
as
(
	select 'gfirstdev@yopmail321.com' as "email" ,'Ganesh Dev' as "name" ,'dev123' as "password" union
	select 'firsttestdev@yopmail321.com' as "email" ,'First Dev' as "name" ,'dev123' as "password" union
	select 'secondtestdev@yopmail321.com' as "email" ,'Second Dev' as "name" ,'dev_two_123' as "password" union
	select 'thirdtestdev@yopmail321.com' as "email" ,'Third Dev' as "name" ,'dev_three_123' as "password"
)
insert into "User" ("id", "isActive", "createdAt", "updatedAt", email, "name", "password")
select	 uuid_generate_v4()
		,true as "isActive"
		,current_timestamp as "createdAt"
		,current_timestamp as "updatedAt"
		,C.email
		,C."name"
		,C."password"
from	CTEUser as c
where not exists (select 1 from "User" u1 where c."email" = u1."email")
;