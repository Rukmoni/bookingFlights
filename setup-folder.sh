#!/bin/bash

# Define root directory
ROOT="src"

# Create directories
mkdir -p $ROOT/api/hooks
mkdir -p $ROOT/api/services
mkdir -p $ROOT/screens/Auth
mkdir -p $ROOT/screens/Flights
mkdir -p $ROOT/screens/Meals


# Create files
touch $ROOT/api/client.ts
touch $ROOT/api/hooks/useAuth.ts
touch $ROOT/api/hooks/useFlights.ts
touch $ROOT/api/hooks/useMeals.ts
touch $ROOT/api/services/authService.ts
touch $ROOT/api/services/flightService.ts
touch $ROOT/api/services/mealService.ts


touch $ROOT/store/index.ts
touch $ROOT/store/hooks.ts
touch $ROOT/store/slices/authSlice.ts
touch $ROOT/store/slices/themeSlice.ts
touch $ROOT/store/slices/cartSlice.ts



touch $ROOT/screens/Auth/LoginScreen.tsx
touch $ROOT/screens/Auth/RegisterScreen.tsx
touch $ROOT/screens/Auth/ForgotPasswordScreen.tsx
touch $ROOT/screens/Flights/FlightListScreen.tsx
touch $ROOT/screens/Flights/FlightDetailScreen.tsx
touch $ROOT/screens/Meals/MealListScreen.tsx
touch $ROOT/screens/Meals/MealDetailScreen.tsx

touch $ROOT/utils/constants.ts
touch $ROOT/utils/formatters.ts
touch $ROOT/utils/validation.ts

touch $ROOT/types/auth.ts
touch $ROOT/types/flight.ts
touch $ROOT/types/meal.ts
touch $ROOT/types/index.ts

echo "✅ Project structure created under $ROOT/"

