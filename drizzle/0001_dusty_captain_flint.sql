CREATE TABLE "blog_posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(512) NOT NULL,
	"slug" varchar(256) NOT NULL,
	"excerpt" text,
	"content" text NOT NULL,
	"author" varchar(256),
	"category" varchar(128),
	"imageUrl" text,
	"published" boolean DEFAULT false NOT NULL,
	"views" integer DEFAULT 0 NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "blog_posts_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "newsletter_subscribers" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(320) NOT NULL,
	"subscribedAt" timestamp DEFAULT now() NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	CONSTRAINT "newsletter_subscribers_email_unique" UNIQUE("email")
);
