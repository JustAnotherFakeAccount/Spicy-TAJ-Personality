@NullResponse @CheckFlag(D1Punisher)
@NullResponse @CheckFlag(D2Punisher)
@NullResponse @CheckFlag(D3Punisher)
@NullResponse @CheckFlag(D4Punisher)
(D1Punisher)
@NullResponse @Goto(Hello)
(D2Punisher)
@SystemMessage [Miss A]: Contacting #DomHonorific #Contact1 .. #ReceptionChat
@NullResponse @AddContact1
@NullResponse @RemoveDomme @Goto(Hello)
(D3Punisher)
@SystemMessage [Miss A]: Contacting #DomHonorific #Contact2 .. #ReceptionChat
@NullResponse @AddContact2
@NullResponse @RemoveDomme @Goto(Hello)
(D4Punisher)
@SystemMessage [Miss A]: Contacting #DomHonorific #Contact3 .. #ReceptionChat
@NullResponse @AddContact3
@NullResponse @RemoveDomme @Goto(Hello)
(Hello)
Well @RT(hello,hi) #SlaveName #DT4 @Goto(Start)
(Start)
@Flag(D1Punisher) @NullResponse @Goto(Domme)
@Flag(D2Punisher) @NullResponse @Goto(Contact1)
@Flag(D3Punisher) @NullResponse @Goto(Contact2)
@Flag(D4Punisher) @NullResponse @Goto(Contact3)
(Domme)
@RT(Well well,Oh my,Well,#GNMGrin) #DT4
@RT(It's time to pay,We need to settle your recent behaviour,I believe I have just the thing to discipline you,I believe I know how to correct your bad behaviour!) #DT4
@Flag(Personality1) @NullResponse @If[SubEndurance]<=[3]Then(PS6Easy)
@Flag(Personality2) @NullResponse @If[SubEndurance]<=[5]Then(PS6Easy)
@Flag(Personality3) @NullResponse @If[SubEndurance]>=[6]Then(PS6Hard)
@NullResponse @Goto(PS6Medium)
(Contact1)
@RT(Well well,Oh my,Well) #SlaveName #DT4
@RT(I'm absolute sure you're gonna hate this and that makes me love it!,We need to correct your poor behaviour,You need a little discipline,Its about time we did something about your behaviour) #DT4
@NullResponse @If[SubEndurance]>[4]AND[SubEndurance]<[8]Then(PS6Medium)
@NullResponse @If[SubEndurance]>=[8]Then(PS6Hard) @Goto(PS6Easy)
(Contact2)
@RT(Well well,Oh my,Well) #SlaveName #DT4
@RT(Discipline I just love that,You're not gonna like this #GNMGrin,I don't think your #GNMCock will enjoy this,This is fun!) #DT4
@NullResponse @If[SubEndurance]>[3]AND[SubEndurance]<[7]Then(PS6Medium)
@NullResponse @If[SubEndurance]>=[7]Then(PS6Hard) @Goto(PS6Easy)
(Contact3)
@RT(Well well,Oh my,Well) #SlaveName #DT4
@RT(Discipline can never be cruel enough,Discipline is all about being cruel,Discipline is about showing no mercy!,No mercy for the bad ones..) #DT4
@NullResponse @If[SubEndurance]>[2]AND[SubEndurance]<[6]Then(PS6Medium)
@NullResponse @If[SubEndurance]>=[6]Then(PS6Hard) @Goto(PS6Easy)
(PS6Easy)
@RT(Due to your lack of good behaviour,Due to bad behaviour,Because of poor behaviour,Since you've been bad) #DT4
@Flag(HasChastity) @RT(I'm putting you in chastity,I'm placing you in your #Cage,I'm going to cage that #GNMCock) #DT4
@NotFlag(HasChastity) @RT(I'm putting you in a no-touch period,I'm gonna give you a no-touch period,You'll be punished by not touching that #GNMCock) #DT4
@Variable[#DateDifference(PDenial, Hours)]<[PDenialSet] @NullResponse @ChangeVar[PDenialSet]=[PDenialSet]+[24] @Goto(CageCheck)
@Variable[#DateDifference(PDenial, Hours)]>[PDenialSet] @NullResponse @SetVar[PDenialSet]=[24] @SetDate(PDenial, 0 Hours) @Goto(CageCheck)
(PS6Medium)
@RT(Due to your lack of good behaviour,Due to bad behaviour,Because of poor behaviour,Since you've been bad) #DT4 
@Flag(HasChastity) @RT(I'm putting you in chastity,I'm placing you in your #Cage,I'm going to cage that #GNMCock) #DT4
@NotFlag(HasChastity) @RT(I'm putting you in a no-touch period,I'm gonna give you a no-touch period,You'll be punished by not touching that #GNMCock) #DT4
@Variable[#DateDifference(PDenial, Hours)]<[PDenialSet] @NullResponse @ChangeVar[PDenialSet]=[PDenialSet]+[48] @Goto(CageCheck)
@Variable[#DateDifference(PDenial, Hours)]>[PDenialSet] @NullResponse @SetVar[PDenialSet]=[48] @SetDate(PDenial, 0 Hours) @Goto(CageCheck)
(PS6Hard)
@RT(Due to your lack of good behaviour,Due to bad behaviour,Because of poor behaviour,Since you've been bad) #DT4 
@Flag(HasChastity) @RT(I'm putting you in chastity,I'm placing you in your #Cage,I'm going to cage that #GNMCock) #DT4
@NotFlag(HasChastity) @RT(I'm putting you in a no-touch period,I'm gonna give you a no-touch period,You'll be punished by not touching that #GNMCock) #DT4
@Variable[#DateDifference(PDenial, Hours)]<[PDenialSet] @NullResponse @ChangeVar[PDenialSet]=[PDenialSet]+[72] @Goto(CageCheck)
@Variable[#DateDifference(PDenial, Hours)]>[PDenialSet] @NullResponse @SetVar[PDenialSet]=[72] @SetDate(PDenial, 0 Hours) @Goto(CageCheck)
(CageCheck)
@NotFlag(ChastityIsOn) And since you aren't caged yet.. #DT4 @TempFlag(PunishmentComplete) @Goto(CageOn)
And since you're caged.. #DT4 @TempFlag(S6Complete)
I think that concludes our business.. #DT4 @CallReturn(CR\BackgroundMode\Punishment\PunishmentBaseEnd.txt)
@End
(CageOn)
@NullResponse @CallReturn(CR\GNMChastityOn.txt)
@RT(Now that you're in the #Cage,Now that you're locked up) #DT4 @TempFlag(S6Complete)
@RT(I think that concludes our business..,I believe our business to be concluded,I believe we're done here..) #DT4 @TempFlag(PunishmentComplete) @CallReturn(CR\BackgroundMode\Punishment\PunishmentBaseEnd.txt)
@End