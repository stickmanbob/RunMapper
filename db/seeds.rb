# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Route.destroy_all
Workout.destroy_all
########## Users ##########################

  ### Dummy user login
   dummy = User.create(email: "dummyUser@runmapper.com", fname:"Guest",lname:"User", password:"testdummy")
  

########### Routes #########################

  ### Dummy user's routes:
  eden = Route.create(name: "Mt. Eden Loop",
  description: "Ajay's daily bike ride",
  creator_id: dummy.id,
  distance: 19119.0,
  activity: "Bike Ride",
  route_data:
   "[{\"lat\":37.3059687861259,\"lng\":-122.0486082199612},
   {\"lat\":37.30586638012952,\"lng\":-122.05043212209132},
   {\"lat\":37.315629861626526,\"lng\":-122.05499472914042},
   {\"lat\":37.31015819053472,\"lng\":-122.07019901370482},
   {\"lat\":37.27924952914352,\"lng\":-122.07144599432311},
   {\"lat\":37.268765536715954,\"lng\":-122.04777550630479},
   {\"lat\":37.2844962422836,\"lng\":-122.03231274907917},
   {\"lat\":37.30067925740237,\"lng\":-122.03553139989704},
   {\"lat\":37.305253571418305,\"lng\":-122.05046593969196},
   {\"lat\":37.30605148761929,\"lng\":-122.04882979219288}]",
   image_url: "https://maps.googleapis.com/maps/api/staticmap?&size=100x100&path=enc:kiubFxr|gV@|CLr@FlA?bAM?_E@cE?wTBmMB{A?OHgDAMHaA?a@?@nPBnY?jGDTJJLFvCAl@JXLRZ\\bAdCxIJGFTN|@V|At@~BPx@@x@Kt@Yn@[~@c@lBFNIXYpAW~@IBBJ}@hJ_@dDT@b@HpE`ApGlApBf@b@h@z@vA\\ZvBZ|@^p@b@n@p@nAzAp@d@l@b@Xn@B^A|@?zAp@tCZz@f@h@t@`@bAn@`CfC^R~Bv@z@L~@DdBFj@N~AxAXJf@@ZGzAu@`@Sz@WXCv@HXLZT`@n@tA|Dl@tBXh@t@h@~@JbAZlBvA|ApA|@`Ab@d@d@Z^H\\AjA[p@E`@V`@fAX`C^lFAx@g@dD?hANj@Z^b@Pl@GJGJa@H_@To@d@gAb@_CZuA`@o@p@[j@CjBT`Ad@d@Nz@?hAUjCi@hEq@dBw@nCw@~Cu@n@O\\Qf@g@zAuB|@{@nAk@nAk@tAUjA_@p@a@hDeFVi@Tw@Fw@?s@Ey@@iATw@X]XOp@BvBdAXAXa@ZiAd@OxBJp@Wv@o@\\kABu@MwBDu@Vm@f@m@FNFELELCf@DlAVd@?h@Yh@mAp@mETg@RCJ`@Gr@Bv@`@\\|@Dt@Hv@GdA[l@c@Xq@Bg@K[]Y]@UNOh@Yj@YJS?WQK]Bk@Zo@jAmAf@QrANr@Qz@m@|@MzAMjAg@^]Re@He@B}@@cCKkCEk@Dc@`@aAGq@{@mAe@e@K]Hq@L[f@g@Ne@Bi@EkAMOa@OeBm@OYFW`AwAXMj@Az@Mt@_@^_@HYToBRu@H}@V}AXy@z@uAn@q@hAo@fCw@l@EXH~@tA\\r@Tj@RN`@L`@?XQp@s@\\GhACp@HzBn@x@PZGdCuA`DsB`@a@x@iB^s@l@o@`DuChAsAtAsBT_ATkAHeAC_LAQMAgAB[AYSOi@SeD]aAa@k@q@aA_@k@q@o@mBaBe@kA[cAi@aAiD{D]i@Uw@SuA[}@qBoD{@_AoAs@g@AQDm@LcAiA_@_@iAk@iAk@[U_@y@OoAOsAQ_@OSi@YcA[YWO_@SyAg@qAm@y@eA_Ak@{@aBcCcBcDmBoDg@u@i@UoEa@kBOeDFsABUE[M_@e@m@{Cy@wCmHiUGU@u@?q@mBAyECaECkJ@eFZgA?_CEiCOiDAQLe@AkA??TWLC@sAAoGEuHMmNC}LDaD?@ZG`@WRsAD_AB]JQTGl@Bjk@CrAc@tBM`@K`AClBD|HFlBG`A?|AHhBIrBDtEBvBEl@AxE?rD@POAwC@mC?wO@qC@G??QAoBKw@KkA@cA&key=AIzaSyCKgpHck-7CDHJot-yYmfQJ_4w6zq9fIPc"

  )


############ Workouts #############################

   Workout.create(user_id: dummy.id, route_id: eden.id, duration: 2700, start_datetime: DateTime.new(2020,2,3,4,5,6), notes: "Fun Ride!", activity:"Bike Ride")