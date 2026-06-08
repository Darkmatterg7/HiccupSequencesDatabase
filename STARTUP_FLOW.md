# Startup Flow

## loadParametersFromUrl
- Purpose: Parse URL hash parameters to set initial application state.
- Immediate Callees: validateParamsLive()

## initUserSession
- Purpose: Initialize user session from local storage or default mock data.
- Immediate Callees: updateSessionUI()

## loadSubmissionsAndReviews
- Purpose: Load submission and review data with workspace connection check.
- Immediate Callees: syncDataFromWorkspace(), renderMySubmissions(), renderModerationDashboard()

## loadSequenceDatabase
- Purpose: Fetch the local sequence database from a JSON file.
- Immediate Callees: renderReferenceTable()
