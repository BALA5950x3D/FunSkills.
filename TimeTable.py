Courses_enrolled = int(input("Number of courses enrolled: \n"))

if (Courses_enrolled > 0):
    print("Hello, User \n Please enter the following information for notification and rewards")
    print("Note: Please enter in 24 hour format ")

    # The input for monday
    MondayFrom = int(input("(Monday)You're free from "))
    MondayTo = int(input("(Monday)You're free Till "))
    TimefreeMonday = (MondayFrom - MondayTo)*60
    # The input for Tuesday
    TuesdayFrom = int(input("(Tuesday)You're free from "))
    TuesdayTo = int(input("(Tuesday)You're free Till "))
    TimefreeTuesday = (TuesdayFrom - TuesdayTo)*60
    # The input for Wednesday
    WednesdayFrom = int(input("(Wednesday)You're free from "))
    WednesdayTo = int(input("(Wednesday)You're free Till "))
    TimefreeWednesday = (WednesdayFrom - WednesdayTo)*60
    # The input for Thursday
    ThursdayFrom = int(input("(Thursday)You're free from "))
    ThursdayTo = int(input("(Thursday)You're free Till "))
    TimefreeThursday = (ThursdayFrom - ThursdayTo)*60
    # The input for Friday
    FridayFrom = int(input("(Friday)You're free from "))
    FridayTo = int(input("(Friday)You're free Till "))
    TimefreeFriday = (FridayFrom - FridayTo)*60
    # The input for Saturday
    SaturdayFrom = int(input("(Saturday)You're free from "))
    SaturdayTo = int(input("(Saturday)You're free Till "))
    TimefreeSaturday = (SaturdayFrom - SaturdayTo)*60
    # The input for Sunday
    SundayFrom = int(input("(Sunday)You're free from "))
    SundayTo = int(input("(Sunday)You're free Till "))
    TimefreeSunday = (SundayFrom - SundayTo)*60

    # Allotment for whole week
    AllotmentMonday    =TimefreeMonday/Courses_enrolled
    AllotmentTuesday   =TimefreeTuesday/Courses_enrolled
    AllotmentWednesday =TimefreeWednesday/Courses_enrolled
    AllotmentThursday  =TimefreeThursday/Courses_enrolled
    AllotmentFriday    =TimefreeFriday/Courses_enrolled
    AllotmentSaturday  =TimefreeSaturday/Courses_enrolled
    AllotmentSunday    =TimefreeSunday/Courses_enrolled

    # Time For Break
    Courses_enrolled = Courses_enrolled*5
    BreakAllotmentMonday    = (
        Courses_enrolled/TimefreeMonday)   -Courses_enrolled
    BreakAllotmentTuesday  = (
        Courses_enrolled/TimefreeTuesday)  -Courses_enrolled
    BreakAllotmentWednesday = (
        Courses_enrolled/TimefreeWednesday)-Courses_enrolled
    BreakAllotmentThursday = (
        Courses_enrolled/TimefreeThursday) -Courses_enrolled
    BreakAllotmentFriday    = (
        Courses_enrolled/TimefreeFriday)   -Courses_enrolled
    BreakAllotmentSaturday = (
        Courses_enrolled/TimefreeSaturday) -Courses_enrolled
    BreakAllotmentSunday    = (
        Courses_enrolled/TimefreeSunday)   -Courses_enrolled

    # Reveal Time slots
    print("Time for each course:"     + str(AllotmentMonday))
    print("BreakTime for each course:"+ str(BreakAllotmentMonday))
    print("Time for each course:"     + str(AllotmentTuesday))
    print("BreakTime for each course:"+ str(BreakAllotmentTuesday))
    print("Time for each course:"     + str(AllotmentWednesday))
    print("BreakTime for each course:"+ str(BreakAllotmentWednesday))
    print("Time for each course:"     + str(AllotmentThursday))
    print("BreakTime for each course:"+ str(BreakAllotmentThursday))
    print("Time for each course:"     + str(AllotmentFriday))
    print("BreakTime for each course:"+ str(AllotmentSaturday))
    print("Time for each course:"     + str(BreakAllotmentSaturday))
    print("BreakTime for each course:"+ str(AllotmentSunday))
    print("Time for each course:"     + str(BreakAllotmentSunday))
else:
    print("Please enroll any courses to continue")
