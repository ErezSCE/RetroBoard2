# QA Lead — Test Plan

**Agent**: qa-lead  
**Generated**: 2026-08-09T20:06:36.427Z

---

## Test Plan

{
  "scope": "All acceptance criteria from US-000 to US-010 are covered by unit, integration, or e2e tests.",
  "unit": [
    {
      "target": "scripts/monorepoSetup.ts",
      "description": "Verify that the repository contains the expected monorepo folders (packages/frontend, packages/backend).",
      "framework": "Jest",
      "storyId": "US-000",
      "acIndex": 0
    },
    {
      "target": "docker/Dockerfile.frontend",
      "description": "Unit‑test that the Dockerfile can be parsed and contains required build steps for the frontend.",
      "framework": "Jest",
      "storyId": "US-000",
      "acIndex": 1
    },
    {
      "target": "docker/Dockerfile.backend",
      "description": "Unit‑test that the backend Dockerfile includes Node.js runtime and copies source files.",
      "framework": "Jest",
      "storyId": "US-000",
      "acIndex": 1
    },
    {
      "target": "ci/github-actions.yml",
      "description": "Validate that the GitHub Actions workflow defines lint, test, and build jobs without syntax errors.",
      "framework": "Jest",
      "storyId": "US-000",
      "acIndex": 2
    },
    {
      "target": "src/backend/services/sessionService.ts",
      "description": "Ensure createSession returns a UUID and a correctly formatted shareable URL.",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 0
    },
    {
      "target": "src/backend/models/sessionModel.ts",
      "description": "Confirm that a session document is persisted with title, description, and date fields.",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 1
    },
    {
      "target": "src/backend/middleware/validationMiddleware.ts",
      "description": "Validate that malformed payloads produce a 400 error with detailed messages.",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 2
    },
    {
      "target": "src/backend/services/sessionService.ts",
      "description": "Check that getSession returns the full board state (columns, cards, votes, clusters).",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 0
    },
    {
      "target": "src/frontend/components/Board.tsx",
      "description": "Render Board with mock session data and assert columns and cards appear in the DOM.",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 1
    },
    {
      "target": "src/backend/services/sessionService.ts",
      "description": "Ensure getSession throws a NotFoundError for unknown session IDs.",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 2
    },
    {
      "target": "src/backend/services/columnService.ts",
      "description": "AddColumn returns a new column ID and stores it in the session document.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 0
    },
    {
      "target": "src/backend/services/columnService.ts",
      "description": "RenameColumn updates the column title and returns the updated column object.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 1
    },
    {
      "target": "src/backend/services/columnService.ts",
      "description": "DeleteColumn removes the column and cascades deletion of its cards.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 2
    },
    {
      "target": "src/backend/socket/socketEmitter.ts",
      "description": "EmitColumnChange is called with correct payload after column mutation.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 3
    },
    {
      "target": "src/backend/services/cardService.ts",
      "description": "AddCard creates a card with content and optional author and returns its ID.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "src/backend/services/cardService.ts",
      "description": "UpdateCard modifies the card content and returns the updated object.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 1
    },
    {
      "target": "src/backend/services/cardService.ts",
      "description": "DeleteCard removes the card from its column.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 2
    },
    {
      "target": "src/backend/socket/socketEmitter.ts",
      "description": "EmitCardChange is triggered after any card mutation.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 3
    },
    {
      "target": "src/backend/socket/socketEmitter.ts",
      "description": "After a successful REST mutation, the corresponding socket event is emitted.",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 0
    },
    {
      "target": "src/frontend/socket/socketClient.ts",
      "description": "Client automatically reconnects and replays missed events after a disconnect.",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 1
    },
    {
      "target": "src/backend/services/voteService.ts",
      "description": "AllocateVotes respects the per‑participant vote limit (default 5).",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 0
    },
    {
      "target": "src/frontend/components/VoteBadge.tsx",
      "description": "Vote count displayed on a card updates when vote state changes.",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 1
    },
    {
      "target": "src/backend/services/voteService.ts",
      "description": "Exceeding the vote limit results in a 400 error from the service.",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 2
    },
    {
      "target": "src/backend/services/clusterService.ts",
      "description": "CreateCluster with a list of card IDs creates a cluster entity containing those cards.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 0
    },
    {
      "target": "src/backend/socket/socketEmitter.ts",
      "description": "EmitClusterChange fires after cluster creation or card moves.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 1
    },
    {
      "target": "src/backend/services/clusterService.ts",
      "description": "RenameCluster updates the cluster title and returns the updated object.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 2
    },
    {
      "target": "src/backend/services/actionItemService.ts",
      "description": "CreateActionItem stores title, description, owner, optional due date and returns its ID.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 0
    },
    {
      "target": "src/frontend/components/ActionItemList.tsx",
      "description": "Action items appear in the UI list and can be marked done via a PATCH call.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "target": "src/backend/socket/socketEmitter.ts",
      "description": "EmitActionItemChange broadcasts creation, update, and completion events.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 2
    },
    {
      "target": "src/frontend/offline/offlineSyncService.ts",
      "description": "When offline, actions are persisted to IndexedDB.",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "target": "src/frontend/offline/offlineSyncService.ts",
      "description": "On reconnection, pending actions are sent to the server in FIFO order.",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 1
    },
    {
      "target": "src/frontend/components/Board.tsx",
      "description": "After sync, the board reflects the correct state without duplicate cards.",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 2
    },
    {
      "target": "docker-compose.yml",
      "description": "Parse docker‑compose file and assert both services are defined with correct ports.",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "target": "src/backend/app.ts",
      "description": "After a simulated restart, getSession returns previously persisted data.",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 2
    }
  ],
  "integration": [
    {
      "target": "POST /api/sessions",
      "description": "Create session endpoint returns 201 and a shareable URL.",
      "framework": "Jest + supertest",
      "storyId": "US-001",
      "acIndex": 0
    },
    {
      "target": "MongoDB",
      "description": "Verify the session document is stored with title, description, and date.",
      "framework": "Jest + supertest",
      "storyId": "US-001",
      "acIndex": 1
    },
    {
      "target": "POST /api/sessions (invalid payload)",
      "description": "Invalid request returns 400 with validation error details.",
      "framework": "Jest + supertest",
      "storyId": "US-001",
      "acIndex": 2
    },
    {
      "target": "GET /api/sessions/:id",
      "description": "Successful fetch returns 200 and full board state.",
      "framework": "Jest + supertest",
      "storyId": "US-002",
      "acIndex": 0
    },
    {
      "target": "GET /api/sessions/:nonexistentId",
      "description": "Requesting unknown session returns 404.",
      "framework": "Jest + supertest",
      "storyId": "US-002",
      "acIndex": 2
    },
    {
      "target": "POST /api/sessions/:id/columns",
      "description": "Column creation returns the new column ID.",
      "framework": "Jest + supertest",
      "storyId": "US-003",
      "acIndex": 0
    },
    {
      "target": "PATCH /api/columns/:colId",
      "description": "Column rename returns the updated column object.",
      "framework": "Jest + supertest",
      "storyId": "US-003",
      "acIndex": 1
    },
    {
      "target": "DELETE /api/columns/:colId",
      "description": "Column deletion removes column and its cards; subsequent GET confirms removal.",
      "framework": "Jest + supertest",
      "storyId": "US-003",
      "acIndex": 2
    },
    {
      "target": "Socket.io column events",
      "description": "After column mutation, a socket event is broadcast and received by a connected client.",
      "framework": "Jest + supertest + socket.io-client",
      "storyId": "US-003",
      "acIndex": 3
    },
    {
      "target": "POST /api/columns/:colId/cards",
      "description": "Card creation returns card ID and stores it under the correct column.",
      "framework": "Jest + supertest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "PATCH /api/cards/:cardId",
      "description": "Card update returns the updated card object.",
      "framework": "Jest + supertest",
      "storyId": "US-004",
      "acIndex": 1
    },
    {
      "target": "DELETE /api/cards/:cardId",
      "description": "Card deletion removes the card; subsequent fetch confirms absence.",
      "framework": "Jest + supertest",
      "storyId": "US-004",
      "acIndex": 2
    },
    {
      "target": "Socket.io card events",
      "description": "Card mutation triggers a socket event received by other clients.",
      "framework": "Jest + supertest + socket.io-client",
      "storyId": "US-004",
      "acIndex": 3
    },
    {
      "target": "REST mutation + socket broadcast",
      "description": "After a successful POST /cards, the server emits a socket event and the client UI updates without reload.",
      "framework": "Jest + supertest + socket.io-client",
      "storyId": "US-005",
      "acIndex": 0
    },
    {
      "target": "Socket reconnection handling",
      "description": "Simulate client disconnect, emit events while offline, reconnect and verify missed events are delivered.",
      "framework": "Jest + supertest + socket.io-client",
      "storyId": "US-005",
      "acIndex": 1
    },
    {
      "target": "POST /api/votes",
      "description": "Participant can cast up to the configured vote limit; response is 200.",
      "framework": "Jest + supertest",
      "storyId": "US-006",
      "acIndex": 0
    },
    {
      "target": "POST /api/votes (exceed limit)",
      "description": "Attempting to exceed vote limit returns 400 with error message.",
      "framework": "Jest + supertest",
      "storyId": "US-006",
      "acIndex": 2
    },
    {
      "target": "Cluster creation via drag API",
      "description": "POST /api/clusters with card IDs creates a cluster containing those cards.",
      "framework": "Jest + supertest",
      "storyId": "US-007",
      "acIndex": 0
    },
    {
      "target": "Socket.io cluster events",
      "description": "Cluster creation and moves emit events received by all participants.",
      "framework": "Jest + supertest + socket.io-client",
      "storyId": "US-007",
      "acIndex": 1
    },
    {
      "target": "PATCH /api/clusters/:clusterId",
      "description": "Renaming a cluster returns the updated cluster object.",
      "framework": "Jest + supertest",
      "storyId": "US-007",
      "acIndex": 2
    },
    {
      "target": "POST /api/action-items",
      "description": "Action item creation returns its ID and stores all supplied fields.",
      "framework": "Jest + supertest",
      "storyId": "US-008",
      "acIndex": 0
    },
    {
      "target": "PATCH /api/action-items/:id (mark done)",
      "description": "Marking an action item as done updates its status field.",
      "framework": "Jest + supertest",
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "target": "Socket.io action‑item events",
      "description": "Action‑item creation, update, and completion are broadcast to all clients.",
      "framework": "Jest + supertest + socket.io-client",
      "storyId": "US-008",
      "acIndex": 2
    },
    {
      "target": "Health check endpoint",
      "description": "GET /health returns 200 confirming API container is running.",
      "framework": "Jest + supertest",
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "target": "Full flow persistence test",
      "description": "Create session, add data, restart server, then fetch session to verify data persisted.",
      "framework": "Jest + supertest",
      "storyId": "US-010",
      "acIndex": 2
    }
  ],
  "e2e": [
    {
      "scenario": "Facilitator creates a new session and copies the shareable link; participant loads the session via the link.",
      "description": "End‑to‑end verification of session creation, URL generation, and board loading.",
      "criticalPath": true,
      "storyId": "US-001",
      "acIndex": -1
    },
    {
      "scenario": "Facilitator adds, renames, and deletes columns; all participants see real‑time updates.",
      "description": "Validate column CRUD operations and Socket.io broadcast across two browser contexts.",
      "criticalPath": true,
      "storyId": "US-003",
      "acIndex": -1
    },
    {
      "scenario": "Participant adds, edits, and deletes cards within a column; changes appear instantly for others.",
      "description": "E2E test of card lifecycle with real‑time synchronization.",
      "criticalPath": true,
      "storyId": "US-004",
      "acIndex": -1
    },
    {
      "scenario": "Participant casts votes on cards up to the limit; vote counts update in real time and excess votes are rejected.",
      "description": "Verify voting limits, UI count updates, and server‑side validation.",
      "criticalPath": true,
      "storyId": "US-006",
      "acIndex": -1
    },
    {
      "scenario": "Participant drags multiple cards to create a cluster, renames the cluster; all users see the grouping instantly.",
      "description": "Test drag‑and‑drop clustering and real‑time propagation.",
      "criticalPath": true,
      "storyId": "US-007",
      "acIndex": -1
    },
    {
      "scenario": "Facilitator converts a card into an action item, marks it as done; action‑item list updates for all participants.",
      "description": "End‑to‑end flow from card conversion to completion with socket updates.",
      "criticalPath": true,
      "storyId": "US-008",
      "acIndex": -1
    },
    {
      "scenario": "Participant works offline: creates cards and votes while disconnected; upon reconnection, actions sync without duplication.",
      "description": "Simulate network loss, perform actions, then reconnect and verify correct synchronization.",
      "criticalPath": true,
      "storyId": "US-009",
      "acIndex": -1
    },
    {
      "scenario": "Full session lifecycle: create session, add columns, cards, vote, cluster, create action items; close browser, reopen, and confirm persisted state.",
      "description": "Comprehensive end‑to‑end test covering all major features in a single session.",
      "criticalPath": true,
      "storyId": "US-010",
      "acIndex": -1
    },
    {
      "scenario": "Docker compose starts both services; health endpoints are reachable; SPA loads without console errors.",
      "description": "Validate that docker‑compose up brings up the stack and the UI initializes correctly.",
      "criticalPath": true,
      "storyId": "US-010",
      "acIndex": 0
    }
  ],
  "coverageTargets": {
    "unit": 85,
    "integration": 70,
    "e2e": 100
  }
}
