# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_27_183321) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "routes", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.integer "creator_id", null: false
    t.float "distance", null: false
    t.text "route_data", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "image_url"
    t.string "activity", null: false
    t.index ["activity"], name: "index_routes_on_activity"
    t.index ["creator_id"], name: "index_routes_on_creator_id"
    t.index ["name"], name: "index_routes_on_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "workouts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "route_id", null: false
    t.integer "duration", null: false
    t.datetime "start_datetime", null: false
    t.text "notes"
    t.string "activity", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.index ["activity"], name: "index_workouts_on_activity"
    t.index ["name"], name: "index_workouts_on_name"
    t.index ["route_id"], name: "index_workouts_on_route_id"
    t.index ["user_id"], name: "index_workouts_on_user_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
