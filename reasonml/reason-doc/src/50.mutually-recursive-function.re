let rec callSecond = () => callFirst()
and callFirst = () => callSecond();
