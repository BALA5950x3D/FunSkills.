Courses_enrolled = int(input("Number of courses enrolled: \n"))
if (Courses_enrolled > 0):
    print("Hello, User \n Please enter the following information for notification and rewards")
    print("Note: Please enter in 24 hour format ")

    # The input for monday
    MondayFrom = int(input("(Monday)You're free from "))
    MondayTo = int(input("(Monday)You're free Till "))
    TimefreeMonday = MondayFrom - MondayTo
    # The input for Tuesday
    TuesdayFrom = int(input("(Tuesday)You're free from "))
    TuesdayTo = int(input("(Tuesday)You're free Till "))
    TimefreeTuesday = TuesdayFrom - TuesdayTo
    # The input for Wednesday
    WednesdayFrom = int(input("(Wednesday)You're free from "))
    WednesdayTo = int(input("(Wednesday)You're free Till "))
    TimefreeWednesday = WednesdayFrom - WednesdayTo
    # The input for Thursday
    ThursdayFrom = int(input("(Thursday)You're free from "))
    ThursdayTo = int(input("(Thursday)You're free Till "))
    TimefreeThursday = ThursdayFrom - ThursdayTo
    # The input for Friday
    FridayFrom = int(input("(Friday)You're free from "))
    FridayTo = int(input("(Friday)You're free Till "))
    TimefreeFriday = FridayFrom - FridayTo
    # The input for Saturday
    SaturdayFrom = int(input("(Saturday)You're free from "))
    SaturdayTo = int(input("(Saturday)You're free Till "))
    TimefreeSaturday = SaturdayFrom - SaturdayTo
    # The input for Sunday
    SundayFrom = int(input("(Sunday)You're free from "))
    SundayTo = int(input("(Sunday)You're free Till "))
    TimefreeSunday = SundayFrom - SundayTo

    # Allotment for whole week
    AllotmentMonday    = Courses_enrolled/(TimefreeMonday*60)
    AllotmentTuesday   = Courses_enrolled/(TimefreeTuesday*60)
    AllotmentWednesday = Courses_enrolled/(TimefreeWednesday*60)
    AllotmentThursday  = Courses_enrolled/(TimefreeThursday*60)
    AllotmentFriday    = Courses_enrolled/(TimefreeFriday*60)
    AllotmentSaturday  = Courses_enrolled/(TimefreeSaturday*60)
    AllotmentSunday    = Courses_enrolled/(TimefreeSunday*60)

    # Time For Break
    Courses_enrolled = Courses_enrolled*5
    BreakAllotmentMonday    = (
        Courses_enrolled/(TimefreeMonday*60))   -Courses_enrolled
    BreakAllotmentTuesday  = (
        Courses_enrolled/(TimefreeTuesday*60))  -Courses_enrolled
    BreakAllotmentWednesday = (
        Courses_enrolled/(TimefreeWednesday*60))-Courses_enrolled
    BreakAllotmentThursday = (
        Courses_enrolled/(TimefreeThursday*60)) -Courses_enrolled
    BreakAllotmentFriday    = (
        Courses_enrolled/(TimefreeFriday*60))   -Courses_enrolled
    BreakAllotmentSaturday = (
        Courses_enrolled/(TimefreeSaturday*60)) -Courses_enrolled
    BreakAllotmentSunday    = (
        Courses_enrolled/(TimefreeSunday*60))   -Courses_enrolled

    # Reveal Time slots
    print("Time for each course: "+AllotmentMonday)
    print("BreakTime for each course: "+BreakAllotmentMonday)
    print("Time for each course: "+AllotmentTuesday)
    print("BreakTime for each course: "+BreakAllotmentTuesday)
    print("Time for each course: "+AllotmentWednesday)
    print("BreakTime for each course: "+BreakAllotmentWednesday)
    print("Time for each course: "+AllotmentThursday)
    print("BreakTime for each course: "+BreakAllotmentThursday)
    print("Time for each course: "+AllotmentFriday)
    print("BreakTime for each course: "+AllotmentSaturday)
    print("Time for each course: "+BreakAllotmentSaturday)
    print("BreakTime for each course: "+AllotmentSunday)
    print("Time for each course: "+BreakAllotmentSunday)

else:
    print("Please enroll any courses to continue")