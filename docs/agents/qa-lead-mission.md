# QA Lead — Test Plan

**Agent**: qa-lead  
**Generated**: 2026-08-09T19:59:53.760Z

---

## Test Plan

{
  "scope": "All acceptance criteria from the provided user stories are covered by the test items below.",
  "unit": [
    {
      "target": "Monorepo structure validation script",
      "description": "Ensures repository contains packages/frontend and packages/backend directories.",
      "framework": "Jest",
      "storyId": "US-000",
      "acIndex": 0
    },
    {
      "target": "Dockerfile and docker-compose.yml parser",
      "description": "Parses Dockerfile and docker-compose.yml to verify they are syntactically correct and can build services.",
      "framework": "Jest",
      "storyId": "US-000",
      "acIndex": 1
    },
    {
      "target": "CI pipeline validation script",
      "description": "Runs lint, test, and build steps to confirm GitHub Actions workflow completes without errors.",
      "framework": "Jest",
      "storyId": "US-000",
      "acIndex": 2
    },
    {
      "target": "SessionService.createSession",
      "description": "Generates a unique sessionId and constructs full shareable URL.",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 0
    },
    {
      "target": "SessionRepository.save",
      "description": "Persists session document with title, description, and date fields to MongoDB.",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 1
    },
    {
      "target": "SessionValidator.validatePayload",
      "description": "Validates request payload and throws error for invalid data.",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 2
    },
    {
      "target": "VoteService.enforceLimit",
      "description": "Ensures a participant cannot exceed the configured vote limit.",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 0
    },
    {
      "target": "OfflineSyncService.storeAction",
      "description": "Stores pending actions in IndexedDB when offline.",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "target": "OfflineSyncService.flushPendingActions",
      "description": "Batches and sends pending actions to server upon reconnection in correct order.",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 1
    },
    {
      "target": "ClusterService.renameCluster",
      "description": "Updates cluster title and ensures change propagates via event emitter.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 2
    },
    {
      "target": "ActionItemService.markDone",
      "description": "Sets action item status to done and emits update event.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 1
    }
  ],
  "integration": [
    {
      "target": "POST /api/sessions",
      "description": "Creates a new session and returns 201 with sessionId and shareable URL.",
      "framework": "Jest with Supertest",
      "storyId": "US-001",
      "acIndex": 0
    },
    {
      "target": "POST /api/sessions (invalid payload)",
      "description": "Returns 400 with validation errors for malformed request.",
      "framework": "Jest with Supertest",
      "storyId": "US-001",
      "acIndex": 2
    },
    {
      "target": "GET /api/sessions/:id",
      "description": "Returns 200 with full session state including columns and cards.",
      "framework": "Jest with Supertest",
      "storyId": "US-002",
      "acIndex": 0
    },
    {
      "target": "GET /api/sessions/:nonexistent",
      "description": "Returns 404 when sessionId does not exist.",
      "framework": "Jest with Supertest",
      "storyId": "US-002",
      "acIndex": 2
    },
    {
      "target": "POST /api/sessions/:id/columns",
      "description": "Creates a column and returns its id.",
      "framework": "Jest with Supertest",
      "storyId": "US-003",
      "acIndex": 0
    },
    {
      "target": "PATCH /api/columns/:colId",
      "description": "Updates column name and returns updated object.",
      "framework": "Jest with Supertest",
      "storyId": "US-003",
      "acIndex": 1
    },
    {
      "target": "DELETE /api/columns/:colId",
      "description": "Deletes column and cascades removal of its cards.",
      "framework": "Jest with Supertest",
      "storyId": "US-003",
      "acIndex": 2
    },
    {
      "target": "POST /api/columns/:colId/cards",
      "description": "Creates a card with content and optional author.",
      "framework": "Jest with Supertest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "PATCH /api/cards/:cardId",
      "description": "Updates card content.",
      "framework": "Jest with Supertest",
      "storyId": "US-004",
      "acIndex": 1
    },
    {
      "target": "DELETE /api/cards/:cardId",
      "description": "Deletes a card.",
      "framework": "Jest with Supertest",
      "storyId": "US-004",
      "acIndex": 2
    },
    {
      "target": "POST /api/action-items",
      "description": "Creates an action item and returns its id.",
      "framework": "Jest with Supertest",
      "storyId": "US-008",
      "acIndex": 0
    },
    {
      "target": "PATCH /api/action-items/:id",
      "description": "Marks action item as done.",
      "framework": "Jest with Supertest",
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "target": "POST /api/cards/:cardId/vote",
      "description": "Validates vote limit and returns 400 if exceeded.",
      "framework": "Jest with Supertest",
      "storyId": "US-006",
      "acIndex": 2
    },
    {
      "target": "Socket.io event emission on column creation",
      "description": "Ensures server emits 'columnCreated' event after POST column.",
      "framework": "Jest with socket.io-mock",
      "storyId": "US-003",
      "acIndex": 3
    },
    {
      "target": "Socket.io event emission on card mutation",
      "description": "Ensures server emits appropriate events for card create/update/delete.",
      "framework": "Jest with socket.io-mock",
      "storyId": "US-004",
      "acIndex": 3
    },
    {
      "target": "Socket.io reconnection handling",
      "description": "Verifies server sends missed events to client after reconnection.",
      "framework": "Jest with socket.io-mock",
      "storyId": "US-005",
      "acIndex": 1
    },
    {
      "target": "Docker compose up integration test",
      "description": "Runs docker-compose and checks API health endpoint and SPA load.",
      "framework": "Jest with Dockerode",
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "target": "GET session after restart",
      "description": "Ensures persisted data loads correctly after application restart.",
      "framework": "Jest with Supertest",
      "storyId": "US-010",
      "acIndex": 2
    }
  ],
  "e2e": [
    {
      "scenario": "Create session and copy shareable link",
      "description": "Facilitator creates a session via UI, receives URL, copies it, and verifies link format.",
      "criticalPath": true,
      "storyId": "US-001",
      "acIndex": 0
    },
    {
      "scenario": "Load session via shareable link and render board",
      "description": "Participant opens link, SPA fetches session, and board with columns and cards is displayed.",
      "criticalPath": true,
      "storyId": "US-002",
      "acIndex": 1
    },
    {
      "scenario": "Column CRUD with real-time synchronization",
      "description": "Facilitator adds, renames, deletes columns; other participant sees updates instantly via WebSocket.",
      "criticalPath": true,
      "storyId": "US-003",
      "acIndex": 3
    },
    {
      "scenario": "Card CRUD with real-time synchronization",
      "description": "Participant adds, edits, deletes cards; changes propagate to all participants instantly.",
      "criticalPath": true,
      "storyId": "US-004",
      "acIndex": 3
    },
    {
      "scenario": "Vote limit enforcement error handling",
      "description": "Attempt to cast more votes than allowed and verify 400 error displayed.",
      "criticalPath": true,
      "storyId": "US-006",
      "acIndex": 2
    },
    {
      "scenario": "Vote counts update in real time",
      "description": "Votes cast by one participant update counts on other participants' boards instantly.",
      "criticalPath": true,
      "storyId": "US-006",
      "acIndex": 1
    },
    {
      "scenario": "Create cluster by dragging cards",
      "description": "Participant drags selected cards onto new cluster, cluster appears with title and contains cards.",
      "criticalPath": true,
      "storyId": "US-007",
      "acIndex": 0
    },
    {
      "scenario": "Cluster creation broadcast in real time",
      "description": "Cluster creation is emitted via Socket.io and all participants see the new cluster instantly.",
      "criticalPath": true,
      "storyId": "US-007",
      "acIndex": 1
    },
    {
      "scenario": "Rename cluster propagates in real time",
      "description": "Facilitator renames a cluster; other participants' UI updates instantly.",
      "criticalPath": true,
      "storyId": "US-007",
      "acIndex": 2
    },
    {
      "scenario": "Create action item via UI",
      "description": "Facilitator creates action item with title, description, owner; UI shows new item in list.",
      "criticalPath": true,
      "storyId": "US-008",
      "acIndex": 0
    },
    {
      "scenario": "Convert card to action item and mark done",
      "description": "Participant converts a card to an action item, then marks it as done; UI reflects status change.",
      "criticalPath": true,
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "scenario": "Action item updates broadcast",
      "description": "Changes to action items (status) are broadcast via Socket.io to all participants.",
      "criticalPath": true,
      "storyId": "US-008",
      "acIndex": 2
    },
    {
      "scenario": "Offline actions stored and synced on reconnection",
      "description": "Participant performs actions while offline; actions are saved in IndexedDB and synced after reconnection without duplication.",
      "criticalPath": true,
      "storyId": "US-009",
      "acIndex": 2
    },
    {
      "scenario": "Application start via docker compose and SPA loads without errors",
      "description": "Run docker compose, ensure API reachable and SPA loads cleanly in the browser.",
      "criticalPath": true,
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "scenario": "Full end-to-end workflow",
      "description": "Facilitator creates session, adds columns, cards, votes, creates cluster, converts to action item; all updates appear in real time.",
      "criticalPath": true,
      "storyId": "US-010",
      "acIndex": 1
    },
    {
      "scenario": "Persisted data loads after restart",
      "description": "Close browser, reopen, verify session data persists and board renders correctly.",
      "criticalPath": true,
      "storyId": "US-010",
      "acIndex": 2
    }
  ],
  "coverageTargets": {
    "unit": 85,
    "integration": 70,
    "e2e": 100
  }
}
