#!/bin/bash

# Create src main folders
mkdir -p src/{assets,components,screens,navigation,services,store,utils,hooks,constants,types}

# Create subfolders for assets
mkdir -p src/assets/{images,icons,fonts}

# Create common component subfolders
mkdir -p src/components/{common,ui,booking}

# Create screen categories
mkdir -p src/screens/{Home,Search,Booking,Payment,Profile}

# Create navigation structure
mkdir -p src/navigation/{stacks,tabs}

# Create redux or zustand store (future)
mkdir -p src/store/{slices,actions}

# Create sample files
touch src/navigation/index.ts
touch src/constants/index.ts
touch src/utils/helpers.ts
touch src/services/api.ts
touch src/store/index.ts

# Optional: create .env for API keys/config
touch .env

echo "✅ Project folder structure created successfully!"
