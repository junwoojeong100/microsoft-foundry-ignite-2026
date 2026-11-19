window.GUIDE_DATA = {
 "schemaVersion": 1,
 "title": "Microsoft Foundry portal hands-on · re-captured with a participant-permission account",
 "capturedDate": "2026-11-18",
 "recording": {
  "startedAt": "2026-11-18T03:48:14.735Z",
  "durationSeconds": 578.24,
  "width": 1600,
  "height": 900,
  "continuous": false,
  "includesAuthentication": false,
  "narration": false,
  "video": "assets/video/full-walkthrough.en.mp4",
  "nativeDurationSeconds": 578.24,
  "note": "We stitched together the recordings of each lab and played the waiting segments at high speed. Sign-in and MFA entry are left out of the video."
 },
 "lab": {
  "subscriptionId": "00000000-0000-0000-0000-000000000000",
  "tenantId": "00000000-0000-0000-0000-000000000000",
  "resourceGroup": "rg-se01",
  "region": "northcentralus",
  "foundryResource": "foundry-se02-lab",
  "project": "se02-lab",
  "deployment": "gpt-6.1-terra",
  "model": "gpt-6.1-terra",
  "modelVersion": "2026-10-26",
  "deploymentType": "Global Standard",
  "tokensPerMinute": 10000,
  "agent": "workshop-assistant-en",
  "agentVersion": "2",
  "workspace": "log-foundry-se02-lab-w7lsnurj7vk3i",
  "applicationInsights": "appi-foundry-se02-lab-5959"
 },
 "chapters": [
  {
   "id": "account",
   "title": "01 · Account, tenant and assigned RG check",
   "seconds": 0.0,
   "videoSeconds": 0.0
  },
  {
   "id": "resource",
   "title": "02 · Foundry resource creation in the Azure Portal",
   "seconds": 40.36,
   "videoSeconds": 40.36
  },
  {
   "id": "project",
   "title": "03 · Default project in the Foundry portal",
   "seconds": 201.4,
   "videoSeconds": 201.4
  },
  {
   "id": "model",
   "title": "04 · gpt-6.1-terra model deployment and testing",
   "seconds": 244.4,
   "videoSeconds": 244.4
  },
  {
   "id": "agent",
   "title": "05 · Workshop Prompt Agent creation",
   "seconds": 338.84,
   "videoSeconds": 338.84
  },
  {
   "id": "connect",
   "title": "06 · App Insights connection check in Traces",
   "seconds": 385.244,
   "videoSeconds": 385.244
  },
  {
   "id": "run",
   "title": "07 · Agent run and conversation check",
   "seconds": 400.168,
   "videoSeconds": 400.168
  },
  {
   "id": "monitoring-setup",
   "title": "08 · Alternate path · App Insights creation and connection in Traces",
   "seconds": 450.32,
   "videoSeconds": 450.32
  },
  {
   "id": "monitor",
   "title": "09 · Run count, tokens and errors in Monitor",
   "seconds": 497.92,
   "videoSeconds": 497.92
  },
  {
   "id": "traces",
   "title": "10 · Input, output, tokens and latency in Traces",
   "seconds": 529.815,
   "videoSeconds": 529.815
  }
 ],
 "shots": [
  {
   "id": "01-guest-sign-in",
   "title": "Sign-in with the issued Internal Guest account",
   "section": "account",
   "action": "Open your profile at the top right of the Azure Portal and check the account you were issued and the directory. Finish sign-in and MFA in the order described above.",
   "expected": "Your issued account and the target directory are displayed.",
   "image": "assets/screenshots/01-guest-sign-in.png",
   "width": 1600,
   "height": 900,
   "seconds": 11.193,
   "capturedAt": "2026-11-18T03:48:49.928000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "Signed-in account and tenant",
     "x": 1408,
     "y": 0,
     "width": 192,
     "height": 40
    },
    {
     "label": "Switch directory if needed",
     "x": 1404,
     "y": 176,
     "width": 96,
     "height": 20
    }
   ],
   "videoSeconds": 11.193
  },
  {
   "id": "02-assigned-resource-group",
   "title": "Operator-assigned resource group selection",
   "section": "account",
   "action": "On the Resource groups page, filter by the name of the group you were assigned, then open that group. Do not create a new resource group.",
   "expected": "Only the assigned resource group is visible to your account.",
   "image": "assets/screenshots/02-assigned-resource-group.png",
   "width": 1600,
   "height": 900,
   "seconds": 17.406,
   "capturedAt": "2026-11-18T03:48:56.141000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "Your assigned resource group",
     "x": 361,
     "y": 264,
     "width": 47,
     "height": 19
    }
   ],
   "videoSeconds": 17.406
  },
  {
   "id": "03-empty-resource-group",
   "title": "Assigned resource group and subscription",
   "section": "account",
   "action": "On the Overview page, check the subscription and the North Central US location. The operator prepares the RG and the roles and pre-registers the required resource providers; participants create the Foundry, model and observability resources.",
   "expected": "The subscription and location of the assigned RG are shown, and it has no resources yet.",
   "image": "assets/screenshots/03-empty-resource-group.png",
   "width": 1600,
   "height": 900,
   "seconds": 22.965,
   "capturedAt": "2026-11-18T03:49:01.700000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "Assigned resource group",
     "x": 638,
     "y": 76,
     "width": 86,
     "height": 32
    },
    {
     "label": "Menu to check permissions",
     "x": 580,
     "y": 234,
     "width": 265,
     "height": 32
    }
   ],
   "videoSeconds": 22.965
  },
  {
   "id": "04-guest-scoped-roles",
   "title": "The three required roles",
   "section": "account",
   "action": "In Access control (IAM) → Check access, check your roles. Adding roles is an operator task, not a participant task.",
   "expected": "You see Contributor and Foundry User on this RG, plus Cognitive Services Usages Reader inherited from the subscription.",
   "image": "assets/screenshots/04-guest-scoped-roles.png",
   "width": 1600,
   "height": 900,
   "seconds": 36.872,
   "capturedAt": "2026-11-18T03:49:15.607000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "RG management permissions",
     "x": 876,
     "y": 688,
     "width": 140,
     "height": 17
    },
    {
     "label": "Foundry usage permissions",
     "x": 876,
     "y": 728,
     "width": 140,
     "height": 17
    },
    {
     "label": "Read-only subscription quota",
     "x": 876,
     "y": 640,
     "width": 140,
     "height": 34
    }
   ],
   "videoSeconds": 36.872
  },
  {
   "id": "05-foundry-create-entry",
   "title": "Start of Foundry creation in the Azure Portal",
   "section": "resource",
   "action": "On the Azure Portal home page, select Foundry → Create a Foundry resource.",
   "expected": "The Create a Foundry resource button appears in the Microsoft Foundry overview.",
   "image": "assets/screenshots/05-foundry-create-entry.png",
   "width": 1600,
   "height": 900,
   "seconds": 55.344,
   "capturedAt": "2026-11-18T04:47:04.790000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "Create a Foundry resource",
     "x": 332,
     "y": 375,
     "width": 193,
     "height": 32
    }
   ],
   "videoSeconds": 55.344
  },
  {
   "id": "06-foundry-basics",
   "title": "Resource and default project names",
   "section": "resource",
   "action": "Select the assigned RG, then fill in Name, Region (North Central US), Application insights and Default project name. This portal creates the Foundry resource and the default project together.",
   "expected": "The assigned RG, the name, North Central US, a new Application insights (New) and the default project name are filled in.",
   "image": "assets/screenshots/06-foundry-basics.png",
   "width": 1600,
   "height": 900,
   "seconds": 68.735,
   "capturedAt": "2026-11-18T04:47:18.181000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "Select the existing assigned RG",
     "x": 278,
     "y": 394,
     "width": 442,
     "height": 24
    },
    {
     "label": "Foundry resource name",
     "x": 278,
     "y": 450,
     "width": 442,
     "height": 24
    },
    {
     "label": "Region",
     "x": 278,
     "y": 490,
     "width": 442,
     "height": 24
    },
    {
     "label": "Application insights (New)",
     "x": 278,
     "y": 659,
     "width": 442,
     "height": 24
    },
    {
     "label": "Default project created together",
     "x": 278,
     "y": 811,
     "width": 442,
     "height": 24
    }
   ],
   "videoSeconds": 68.735
  },
  {
   "id": "07-foundry-managed-storage",
   "title": "Default managed storage, left as is",
   "section": "resource-settings",
   "action": "Leave the Storage tab at its defaults. Do not add Key Vault, Cosmos DB, AI Search or a separate Storage Account for this basic Prompt Agent lab.",
   "expected": "The default Agent service configuration is selected.",
   "image": "assets/screenshots/07-foundry-managed-storage.png",
   "width": 1600,
   "height": 900,
   "seconds": 72.242,
   "capturedAt": "2026-11-18T04:47:21.688000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "Default Agent service configuration",
     "x": 82,
     "y": 152,
     "width": 65,
     "height": 36
    }
   ],
   "videoSeconds": 72.242
  },
  {
   "id": "08-foundry-workshop-network",
   "title": "Default network for the workshop",
   "section": "resource-settings",
   "action": "Keep the default public network setting under Inbound Networking. This is a workshop example and differs from the private network and security design of a real production environment.",
   "expected": "The default public network is selected.",
   "image": "assets/screenshots/08-foundry-workshop-network.png",
   "width": 1600,
   "height": 900,
   "seconds": 75.861,
   "capturedAt": "2026-11-18T04:47:25.307000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "Default workshop network",
     "x": 155,
     "y": 152,
     "width": 149,
     "height": 36
    }
   ],
   "videoSeconds": 75.861
  },
  {
   "id": "09-foundry-outbound-default",
   "title": "Default settings with no separate VNet connection",
   "section": "resource-settings",
   "action": "Keep the default under Outbound Networking. This is the standard workshop flow, in which no Custom VNet is configured.",
   "expected": "The default Outbound setting is used, with no separate VNet.",
   "image": "assets/screenshots/09-foundry-outbound-default.png",
   "width": 1600,
   "height": 900,
   "seconds": 80.013,
   "capturedAt": "2026-11-18T04:47:29.459000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "Default Outbound setting",
     "x": 312,
     "y": 152,
     "width": 160,
     "height": 36
    }
   ],
   "videoSeconds": 80.013
  },
  {
   "id": "10-foundry-managed-identity",
   "title": "Default system-assigned managed identity",
   "section": "resource-settings",
   "action": "Keep the default System assigned on the Identity tab. Participants do not create a separate Entra ID application.",
   "expected": "The system-assigned managed identity is turned on.",
   "image": "assets/screenshots/10-foundry-managed-identity.png",
   "width": 1600,
   "height": 900,
   "seconds": 83.558,
   "capturedAt": "2026-11-18T04:47:33.004000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "Managed identity setting",
     "x": 480,
     "y": 152,
     "width": 65,
     "height": 36
    }
   ],
   "videoSeconds": 83.558
  },
  {
   "id": "11-foundry-encryption-default",
   "title": "Default encryption with Microsoft-managed keys",
   "section": "resource-settings",
   "action": "In Encryption, keep the default Microsoft-managed keys encryption and do not add a customer-managed key.",
   "expected": "Microsoft-managed keys are selected.",
   "image": "assets/screenshots/11-foundry-encryption-default.png",
   "width": 1600,
   "height": 900,
   "seconds": 86.963,
   "capturedAt": "2026-11-18T04:47:36.409000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "No extra customer-managed key",
     "x": 553,
     "y": 152,
     "width": 84,
     "height": 36
    }
   ],
   "videoSeconds": 86.963
  },
  {
   "id": "12-foundry-tags",
   "title": "No extra tags before the review screen",
   "section": "resource-settings",
   "action": "Leave Tags empty in this example. If the workshop operator provided separate tag rules, follow those rules.",
   "expected": "You move on to the next step without tags.",
   "image": "assets/screenshots/12-foundry-tags.png",
   "width": 1600,
   "height": 900,
   "seconds": 90.368,
   "capturedAt": "2026-11-18T04:47:39.814000Z",
   "source": "https://portal.azure.com",
   "hotspots": [],
   "videoSeconds": 90.368
  },
  {
   "id": "13-foundry-review-create",
   "title": "Resource and default project creation after review",
   "section": "resource",
   "action": "On Review + create, check the assigned RG, the name and the default project, then select Create. The other tabs keep their default values.",
   "expected": "Once validation passes, the Create button is enabled.",
   "image": "assets/screenshots/13-foundry-review-create.png",
   "width": 1600,
   "height": 900,
   "seconds": 184.592,
   "capturedAt": "2026-11-18T04:49:14.038000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "Create with the participant account",
     "x": 208,
     "y": 856,
     "width": 80,
     "height": 24
    }
   ],
   "videoSeconds": 184.592
  },
  {
   "id": "14-foundry-created",
   "title": "Foundry resource and default project deployment complete",
   "section": "resource",
   "action": "Confirm the \"Your deployment is complete\" message, then select Go to resource.",
   "expected": "The Azure deployment succeeds and Go to resource appears.",
   "image": "assets/screenshots/14-foundry-created.png",
   "width": 1600,
   "height": 900,
   "seconds": 201.074,
   "capturedAt": "2026-11-18T04:50:48.080000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "Azure deployment succeeded",
     "x": 321,
     "y": 189,
     "width": 296,
     "height": 23
    },
    {
     "label": "Open the created Foundry resource",
     "x": 321,
     "y": 404,
     "width": 129,
     "height": 24
    }
   ],
   "videoSeconds": 201.074
  },
  {
   "id": "15-foundry-resource-overview",
   "title": "Foundry portal access from the created resource",
   "section": "project",
   "action": "On the Azure Portal Overview page, check API Kind=AIServices and Status=Succeeded, then select Go to Foundry portal.",
   "expected": "The resource status is Succeeded and the Go to Foundry portal button appears.",
   "image": "assets/screenshots/15-foundry-resource-overview.png",
   "width": 1600,
   "height": 900,
   "seconds": 220.605,
   "capturedAt": "2026-11-18T04:50:57.027000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "Open Foundry portal",
     "x": 309,
     "y": 142,
     "width": 128,
     "height": 17
    }
   ],
   "videoSeconds": 220.605
  },
  {
   "id": "16-foundry-project-home",
   "title": "Default project home",
   "section": "project",
   "action": "In the Foundry portal, check that New Foundry is turned on and the project is se02-lab. The default project was already created together with the resource in the previous step, so do not create it again.",
   "expected": "You see the project name, the New Foundry toggle and the welcome message.",
   "image": "assets/screenshots/16-foundry-project-home.png",
   "width": 1600,
   "height": 900,
   "seconds": 240.878,
   "capturedAt": "2026-11-18T04:51:13.065000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Current project",
     "x": 185,
     "y": 0,
     "width": 169,
     "height": 48
    },
    {
     "label": "New Foundry on",
     "x": 1224,
     "y": 14,
     "width": 56,
     "height": 20
    },
    {
     "label": "Check the user",
     "x": 754,
     "y": 88,
     "width": 313,
     "height": 36
    }
   ],
   "videoSeconds": 240.878
  },
  {
   "id": "17-project-not-found",
   "title": "\"Project not found\" right after creating a project",
   "section": "troubleshooting",
   "action": "Right after the deployment finishes, the project you open with Go to Foundry portal may show \"Project 'se02-lab' could not be found. It may have been deleted.\" The project was not deleted; the new project is just not reflected in the Foundry portal yet. Do not create the project again or switch with Select another project. Wait a few minutes, then open the same address again.",
   "expected": "This screen appeared on the first attempt during the capture, and the same address opened normally 5–7 minutes after the project was created. If it persists after 10 minutes, do not recreate the project under the same name; report the time shown on the error screen and the project name to the operator.",
   "image": "assets/screenshots/17-project-not-found.png",
   "width": 1600,
   "height": 900,
   "seconds": 201.4,
   "capturedAt": "2026-11-18T04:19:58.513000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Project not found",
     "x": 684,
     "y": 461,
     "width": 292,
     "height": 54
    },
    {
     "label": "Notice: project not reflected yet",
     "x": 602,
     "y": 515,
     "width": 436,
     "height": 33
    }
   ],
   "videoSeconds": 201.4
  },
  {
   "id": "18-model-deploy-entry",
   "title": "Start of a model deployment",
   "section": "model",
   "action": "In Build → Models → Deployments, select Deploy → Deploy a base model.",
   "expected": "The new project has no model deployments yet.",
   "image": "assets/screenshots/18-model-deploy-entry.png",
   "width": 1600,
   "height": 900,
   "seconds": 261.494,
   "capturedAt": "2026-11-18T04:51:54.631000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Deploy menu",
     "x": 790,
     "y": 578,
     "width": 96,
     "height": 32
    },
    {
     "label": "Deploy a base model",
     "x": 795,
     "y": 615,
     "width": 176,
     "height": 32
    }
   ],
   "videoSeconds": 261.494
  },
  {
   "id": "19-model-catalog-search",
   "title": "Catalog search for gpt-6.1-terra",
   "section": "model",
   "action": "Enter gpt-6.1-terra in the model catalog search box and select the OpenAI gpt-6.1-terra card.",
   "expected": "The model card you select is named exactly gpt-6.1-terra.",
   "image": "assets/screenshots/19-model-catalog-search.png",
   "width": 1600,
   "height": 900,
   "seconds": 276.724,
   "capturedAt": "2026-11-18T04:52:09.861000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Catalog search",
     "x": 277,
     "y": 146,
     "width": 326,
     "height": 30
    },
    {
     "label": "gpt-6.1-terra card",
     "x": 1240,
     "y": 235,
     "width": 336,
     "height": 178
    }
   ],
   "videoSeconds": 276.724
  },
  {
   "id": "20-model-version-deploy",
   "title": "Model version check, then Deploy",
   "section": "model",
   "action": "On the OpenAI gpt-6.1-terra card, check the version (2026-10-26) and select Deploy.",
   "expected": "The selected model is gpt-6.1-terra, provided by Azure.",
   "image": "assets/screenshots/20-model-version-deploy.png",
   "width": 1600,
   "height": 900,
   "seconds": 284.566,
   "capturedAt": "2026-11-18T04:52:17.703000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Model name",
     "x": 300,
     "y": 74,
     "width": 186,
     "height": 36
    },
    {
     "label": "Deploy",
     "x": 1448,
     "y": 76,
     "width": 96,
     "height": 32
    }
   ],
   "videoSeconds": 284.566
  },
  {
   "id": "21-model-custom-settings",
   "title": "Custom deployment with the workshop quota",
   "section": "model",
   "action": "On the Deploy menu, select Custom settings. Do not use the default quota as is; adjust it to each participant's limit.",
   "expected": "You can set the deployment name, Global Standard and TPM yourself.",
   "image": "assets/screenshots/21-model-custom-settings.png",
   "width": 1600,
   "height": 900,
   "seconds": 286.571,
   "capturedAt": "2026-11-18T04:52:19.708000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Custom settings",
     "x": 1249,
     "y": 165,
     "width": 290,
     "height": 66
    }
   ],
   "videoSeconds": 286.571
  },
  {
   "id": "22-model-deployment-settings",
   "title": "Deployment with Global Standard · 10K TPM",
   "section": "model",
   "action": "Check that Deployment name=gpt-6.1-terra, Deployment type=Global Standard and Tokens per Minute Rate Limit=10000, then select Deploy. Keep Guardrails at DefaultV2.",
   "expected": "Each participant is assigned 10K TPM. The unit on this screen is tokens per minute, so you do not enter 10.",
   "image": "assets/screenshots/22-model-deployment-settings.png",
   "width": 1600,
   "height": 900,
   "seconds": 300.427,
   "capturedAt": "2026-11-18T04:52:33.564000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Deployment name",
     "x": 1034,
     "y": 89,
     "width": 541,
     "height": 30
    },
    {
     "label": "Global Standard",
     "x": 1034,
     "y": 169,
     "width": 507,
     "height": 30
    },
    {
     "label": "TPM input",
     "x": 1423,
     "y": 347,
     "width": 90,
     "height": 30
    },
    {
     "label": "Guardrails DefaultV2",
     "x": 1034,
     "y": 492,
     "width": 507,
     "height": 30
    },
    {
     "label": "Deploy",
     "x": 1033,
     "y": 844,
     "width": 70,
     "height": 32
    }
   ],
   "videoSeconds": 300.427
  },
  {
   "id": "23-model-remove-web-search",
   "title": "Removal of the default Web search tool",
   "section": "model",
   "action": "If Web search appears in the Playground by default, select Actions for Web search → Remove. This lab uses only the model and a Prompt Agent, with no web search and no extra Bing cost.",
   "expected": "The external search tool is removed before inference.",
   "image": "assets/screenshots/23-model-remove-web-search.png",
   "width": 1600,
   "height": 900,
   "seconds": 318.393,
   "capturedAt": "2026-11-18T04:52:47.214000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Actions for Web search",
     "x": 672,
     "y": 513,
     "width": 24,
     "height": 24
    },
    {
     "label": "Remove",
     "x": 677,
     "y": 542,
     "width": 128,
     "height": 32
    }
   ],
   "videoSeconds": 318.393
  },
  {
   "id": "24-model-playground-parameters",
   "title": "Generation parameters for short lab responses",
   "section": "model",
   "action": "In Parameters, enter Max Completion Tokens=1024 and check that Reasoning Effort is at its default, low. gpt-6.1-terra has no minimal option; it offers low, medium, high and xhigh. Do not use an unnecessarily large response limit in a 10K TPM lab.",
   "expected": "You are ready to test short model responses quickly.",
   "image": "assets/screenshots/24-model-playground-parameters.png",
   "width": 1600,
   "height": 900,
   "seconds": 323.361,
   "capturedAt": "2026-11-18T04:52:52.287000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Max Completion Tokens",
     "x": 562,
     "y": 231,
     "width": 83,
     "height": 30
    },
    {
     "label": "Reasoning Effort",
     "x": 379,
     "y": 320,
     "width": 99,
     "height": 20
    }
   ],
   "videoSeconds": 323.361
  },
  {
   "id": "25-model-test-input",
   "title": "First question to the deployed model",
   "section": "model",
   "action": "Enter the example question in Chat with the model... and select Send. No API key or code is needed.",
   "expected": "The deployed gpt-6.1-terra model is called directly with the participant sign-in.",
   "image": "assets/screenshots/en/25-model-test-input.png",
   "width": 1600,
   "height": 900,
   "seconds": 328.877,
   "capturedAt": "2026-11-18T23:17:28.107000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Question input",
     "x": 748,
     "y": 786,
     "width": 824,
     "height": 20
    },
    {
     "label": "Send",
     "x": 1540,
     "y": 822,
     "width": 32,
     "height": 32
    }
   ],
   "videoSeconds": 328.877
  },
  {
   "id": "26-model-test-response",
   "title": "The model's actual response",
   "section": "model",
   "action": "Check that the model's response appears in the chat on the right. If it responds without errors, the model deployment and inference are complete.",
   "expected": "The model response, the response time and the tokens are displayed.",
   "image": "assets/screenshots/en/26-model-test-response.png",
   "width": 1600,
   "height": 900,
   "seconds": 335.361,
   "capturedAt": "2026-11-18T23:17:34.591000Z",
   "source": "https://ai.azure.com",
   "hotspots": [],
   "videoSeconds": 335.361
  },
  {
   "id": "27-agent-instructions",
   "title": "Agent role and response rules",
   "section": "agent",
   "action": "In Instructions, enter the workshop assistant role and the rules to answer in English and in at most 3 sentences. Leave Tools empty and select Save as agent.",
   "expected": "You are ready to create a basic Prompt Agent that reuses the model deployment and the instructions.",
   "image": "assets/screenshots/en/27-agent-instructions.png",
   "width": 1600,
   "height": 900,
   "seconds": 359.925,
   "capturedAt": "2026-11-18T22:12:17.244000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Agent instructions",
     "x": 244,
     "y": 254,
     "width": 451,
     "height": 112
    },
    {
     "label": "Tools left empty",
     "x": 50,
     "y": 292,
     "width": 31,
     "height": 20
    },
    {
     "label": "Save as agent",
     "x": 1311,
     "y": 68,
     "width": 111,
     "height": 32
    }
   ],
   "videoSeconds": 359.925
  },
  {
   "id": "28-agent-create",
   "title": "Prompt Agent naming and creation",
   "section": "agent",
   "action": "Enter workshop-assistant-en in Agent name and select Create and open playground. Do not use the Microsoft Copilot harness.",
   "expected": "This creates a regular Prompt Agent. It is not a Hosted agent or Copilot harness lab.",
   "image": "assets/screenshots/en/28-agent-create.png",
   "width": 1600,
   "height": 900,
   "seconds": 367.295,
   "capturedAt": "2026-11-18T22:12:24.614000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Agent name",
     "x": 541,
     "y": 416,
     "width": 518,
     "height": 30
    },
    {
     "label": "Create and open Playground",
     "x": 781,
     "y": 561,
     "width": 201,
     "height": 32
    }
   ],
   "videoSeconds": 367.295
  },
  {
   "id": "29-agent-created",
   "title": "Saved agent, model and instructions",
   "section": "agent",
   "action": "Check the agent name, Version 1, the gpt-6.1-terra model and the instructions you entered. A default toolbox containing Web search is attached to Tools automatically, so remove it in the next step.",
   "expected": "The Prompt Agent is saved as Version 1. Publish is not needed for this Playground lab.",
   "image": "assets/screenshots/en/29-agent-created.png",
   "width": 1600,
   "height": 900,
   "seconds": 374.887,
   "capturedAt": "2026-11-18T22:12:41.206000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Agent name",
     "x": 274,
     "y": 70,
     "width": 204,
     "height": 28
    },
    {
     "label": "Version",
     "x": 1025,
     "y": 73,
     "width": 175,
     "height": 22
    },
    {
     "label": "Model",
     "x": 245,
     "y": 150,
     "width": 377,
     "height": 30
    },
    {
     "label": "Instructions",
     "x": 244,
     "y": 332,
     "width": 451,
     "height": 112
    },
    {
     "label": "Default toolbox (Web search)",
     "x": 671,
     "y": 611,
     "width": 24,
     "height": 24
    }
   ],
   "videoSeconds": 374.887
  },
  {
   "id": "30-agent-remove-toolbox",
   "title": "Removal of the default toolbox (Web search)",
   "section": "agent",
   "action": "In the toolbox under Tools, select Actions → Remove. This lab uses only the model and a Prompt Agent, with no extra Bing web search cost and no data movement.",
   "expected": "The toolbox disappears and Save is enabled.",
   "image": "assets/screenshots/en/30-agent-remove-toolbox.png",
   "width": 1600,
   "height": 900,
   "seconds": 376.855,
   "capturedAt": "2026-11-18T22:12:43.174000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Actions",
     "x": 671,
     "y": 611,
     "width": 24,
     "height": 24
    },
    {
     "label": "Remove",
     "x": 676,
     "y": 753,
     "width": 128,
     "height": 32
    }
   ],
   "videoSeconds": 376.855
  },
  {
   "id": "31-agent-tools-saved",
   "title": "Saved with empty Tools · Version 2",
   "section": "agent",
   "action": "Select Save to save the empty Tools state. The Version changes to 2, and only the Create toolbox message remains under Tools.",
   "expected": "Version 2 is saved without Tools.",
   "image": "assets/screenshots/en/31-agent-tools-saved.png",
   "width": 1600,
   "height": 900,
   "seconds": 385.244,
   "capturedAt": "2026-11-18T22:12:51.563000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Version",
     "x": 1025,
     "y": 73,
     "width": 175,
     "height": 22
    },
    {
     "label": "Tools area",
     "x": 552,
     "y": 607,
     "width": 94,
     "height": 24
    }
   ],
   "videoSeconds": 385.244
  },
  {
   "id": "32-tracing-before-first-run",
   "title": "Tracing connection check before the run",
   "section": "connect",
   "action": "If the Traces tab shows an empty trace table and a Chat with agent button instead of a Connect notice, the Application insights you selected when creating the Foundry resource is already connected. Recording starts with the conversations you run after the connection.",
   "expected": "There are no traces yet because nothing has run. The Cost Management Reader notice is about currency display; that role is not added for this lab.",
   "image": "assets/screenshots/en/32-tracing-before-first-run.png",
   "width": 1600,
   "height": 900,
   "seconds": 400.167,
   "capturedAt": "2026-11-18T22:13:06.486000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Traces tab",
     "x": 381,
     "y": 100,
     "width": 56,
     "height": 32
    },
    {
     "label": "No traces",
     "x": 761,
     "y": 614,
     "width": 298,
     "height": 28
    },
    {
     "label": "Chat with agent",
     "x": 849,
     "y": 686,
     "width": 123,
     "height": 32
    }
   ],
   "videoSeconds": 400.167
  },
  {
   "id": "33-fallback-traces-connect-banner",
   "title": "Notice shown when App Insights is not connected",
   "section": "monitoring-setup",
   "action": "If the notice \"Create or connect an App Insights resource to enable tracing.\" appears in Traces (or on the agent's Traces tab), select Connect on the right. If you do not see this notice, it is already connected, so do not create a new one.",
   "expected": "The trace list is empty and the notice bar has a Connect button.",
   "image": "assets/screenshots/33-fallback-traces-connect-banner.png",
   "width": 1600,
   "height": 900,
   "seconds": 475.283,
   "capturedAt": "2026-11-18T05:00:05.441000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Connection notice",
     "x": 285,
     "y": 133,
     "width": 1179,
     "height": 20
    },
    {
     "label": "Connect",
     "x": 1464,
     "y": 131,
     "width": 63,
     "height": 24
    }
   ],
   "videoSeconds": 475.283
  },
  {
   "id": "34-fallback-resource-list",
   "title": "Application insights resource name list",
   "section": "monitoring-setup",
   "action": "In the App. Insights resource dialog, open the Application insights resource name list. Select Create new resource at the top. If you have already created an App Insights resource in your RG, you can also pick it from the list and connect it.",
   "expected": "Create new resource appears at the top of the list, followed by the names of the existing App Insights resources in the same RG.",
   "image": "assets/screenshots/34-fallback-resource-list.png",
   "width": 1600,
   "height": 900,
   "seconds": 479.357,
   "capturedAt": "2026-11-18T05:00:09.515000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Name list",
     "x": 256,
     "y": 409,
     "width": 314,
     "height": 30
    },
    {
     "label": "Create new resource",
     "x": 259,
     "y": 446,
     "width": 342,
     "height": 32
    }
   ],
   "videoSeconds": 479.357
  },
  {
   "id": "35-fallback-create-form",
   "title": "Create new resource form check",
   "section": "monitoring-setup",
   "action": "Use the automatically filled Name as is, or change it to a unique name. Keep Log Analytics Workspace at the [new] default and Auth Type at API Key, then select Create. The new resource is created in your assigned RG, the one that contains the project.",
   "expected": "Name, Log Analytics Workspace and Auth Type are filled in and the Create button is enabled. You do not enter a key or connection string yourself.",
   "image": "assets/screenshots/35-fallback-create-form.png",
   "width": 1600,
   "height": 900,
   "seconds": 482.816,
   "capturedAt": "2026-11-18T05:00:12.974000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Name",
     "x": 256,
     "y": 351,
     "width": 348,
     "height": 30
    },
    {
     "label": "Log Analytics Workspace",
     "x": 256,
     "y": 419,
     "width": 314,
     "height": 30
    },
    {
     "label": "Auth Type",
     "x": 256,
     "y": 487,
     "width": 314,
     "height": 30
    },
    {
     "label": "Create",
     "x": 255,
     "y": 590,
     "width": 53,
     "height": 24
    }
   ],
   "videoSeconds": 482.816
  },
  {
   "id": "36-fallback-connected",
   "title": "Connection complete · trace table shown",
   "section": "monitoring-setup",
   "action": "After Create, wait a few seconds: the dialog closes and the connection notice bar disappears.",
   "expected": "The Traces table appears with \"No project traces yet\". Traces are recorded starting with the conversations you run after the connection.",
   "image": "assets/screenshots/36-fallback-connected.png",
   "width": 1600,
   "height": 900,
   "seconds": 494.96,
   "capturedAt": "2026-11-18T05:00:25.118000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Trace table",
     "x": 818,
     "y": 570,
     "width": 183,
     "height": 28
    }
   ],
   "videoSeconds": 494.96
  },
  {
   "id": "37-agent-run-parameters",
   "title": "Agent run response limit setting",
   "section": "run",
   "action": "In Parameters of the Agent Playground, enter Max output tokens=1024 and check that Reasoning Effort is at its default, low. These run settings are independent of the model Playground, so check them again.",
   "expected": "This agent test also runs with a short response limit. Max output tokens limits the output length; it is not a cost budget cap.",
   "image": "assets/screenshots/en/37-agent-run-parameters.png",
   "width": 1600,
   "height": 900,
   "seconds": 406.506,
   "capturedAt": "2026-11-18T22:13:12.825000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Max output tokens",
     "x": 586,
     "y": 435,
     "width": 72,
     "height": 32
    },
    {
     "label": "Reasoning Effort",
     "x": 29,
     "y": 294,
     "width": 99,
     "height": 20
    }
   ],
   "videoSeconds": 406.506
  },
  {
   "id": "38-agent-save-run-settings",
   "title": "Saved version check · Save not needed",
   "section": "run",
   "action": "Close Parameters. Version stays at 2 and Save is disabled. Max output tokens applies only to this Playground conversation and is not saved in the agent definition. Do not select Publish.",
   "expected": "The Playground conversation starts with the currently saved Version 2.",
   "image": "assets/screenshots/en/38-agent-save-run-settings.png",
   "width": 1600,
   "height": 900,
   "seconds": 408.945,
   "capturedAt": "2026-11-18T22:13:15.264000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Version",
     "x": 1025,
     "y": 73,
     "width": 175,
     "height": 22
    },
    {
     "label": "Save disabled",
     "x": 1208,
     "y": 68,
     "width": 56,
     "height": 32
    }
   ],
   "videoSeconds": 408.945
  },
  {
   "id": "39-agent-first-question",
   "title": "First agent question after the connection",
   "section": "run",
   "action": "Check the currently saved Version, enter a question and select Send. This conversation is a new run after the tracing connection.",
   "expected": "The agent answers in English using the saved instructions and the deployed model.",
   "image": "assets/screenshots/en/39-agent-first-question.png",
   "width": 1600,
   "height": 900,
   "seconds": 413.213,
   "capturedAt": "2026-11-18T22:13:19.532000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Question input",
     "x": 748,
     "y": 786,
     "width": 824,
     "height": 20
    },
    {
     "label": "Send",
     "x": 1540,
     "y": 822,
     "width": 32,
     "height": 32
    }
   ],
   "videoSeconds": 413.213
  },
  {
   "id": "40-agent-first-response",
   "title": "First run response",
   "section": "run",
   "action": "Check the response, the deployed model name, the latency and the token display. This is the result of running the saved agent Version 2, not a standalone model test.",
   "expected": "A normal response is returned. This basic agent has no tools connected for real Azure operations.",
   "image": "assets/screenshots/en/40-agent-first-response.png",
   "width": 1600,
   "height": 900,
   "seconds": 423.343,
   "capturedAt": "2026-11-18T22:13:29.662000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Response, model, latency, tokens",
     "x": 750,
     "y": 262,
     "width": 820,
     "height": 88
    }
   ],
   "videoSeconds": 423.343
  },
  {
   "id": "41-agent-follow-up-response",
   "title": "Follow-up question in the same conversation",
   "section": "run",
   "action": "Send a follow-up question without selecting New chat to check the multi-turn conversation. Responses can differ each time.",
   "expected": "The follow-up question also runs normally. Review the AI output separately from whether the run succeeded.",
   "image": "assets/screenshots/en/41-agent-follow-up-response.png",
   "width": 1600,
   "height": 900,
   "seconds": 434.265,
   "capturedAt": "2026-11-18T22:13:40.584000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "New response, model, latency, tokens",
     "x": 750,
     "y": 400,
     "width": 820,
     "height": 88
    }
   ],
   "videoSeconds": 434.265,
   "extra": true
  },
  {
   "id": "42-agent-scoped-follow-up",
   "title": "Follow-up question that states the lab scope",
   "section": "run",
   "action": "State in the question that this is a basic Prompt Agent without Tools, then check the follow-up response. Changing the role means editing Instructions and selecting Save; this lab needs no key or plugin changes.",
   "expected": "You have now completed three runs in the same conversation. Check the accuracy of the answer separately from the success of the run and trace.",
   "image": "assets/screenshots/en/42-agent-scoped-follow-up.png",
   "width": 1600,
   "height": 900,
   "seconds": 447.834,
   "capturedAt": "2026-11-18T22:13:54.153000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "New response, model, latency, tokens",
     "x": 750,
     "y": 558,
     "width": 820,
     "height": 88
    }
   ],
   "videoSeconds": 447.834
  },
  {
   "id": "43-agent-monitor-overview",
   "title": "Monitor overview and token usage",
   "section": "monitor",
   "action": "In the agent's Monitor → Overview, select Last Day for Date range. Check the token usage under Operational metrics.",
   "expected": "Total token usage for the selected period is displayed.",
   "image": "assets/screenshots/en/43-agent-monitor-overview.png",
   "width": 1600,
   "height": 900,
   "seconds": 519.202,
   "capturedAt": "2026-11-18T22:17:00.379000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Token usage summary",
     "x": 265,
     "y": 380,
     "width": 104,
     "height": 20
    },
    {
     "label": "Date range",
     "x": 5,
     "y": 3,
     "width": 13,
     "height": 13
    }
   ],
   "videoSeconds": 519.202
  },
  {
   "id": "44-agent-monitor-run-token-charts",
   "title": "Run count and token charts",
   "section": "monitor",
   "action": "Scroll down to the Operational metrics charts and check Agent runs and Token usage. Displayed values may be rounded.",
   "expected": "The Agent runs chart shows the agent name and the number of runs, and Token usage shows tokens by model.",
   "image": "assets/screenshots/en/44-agent-monitor-run-token-charts.png",
   "width": 1600,
   "height": 900,
   "seconds": 522.637,
   "capturedAt": "2026-11-18T22:17:03.814000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Agent runs chart",
     "x": 261,
     "y": 133,
     "width": 76,
     "height": 22
    },
    {
     "label": "Token usage chart",
     "x": 261,
     "y": 645,
     "width": 86,
     "height": 22
    }
   ],
   "videoSeconds": 522.637
  },
  {
   "id": "45-agent-monitor-error-rate",
   "title": "Error check",
   "section": "monitor",
   "action": "In the Gen AI errors chart, check that there are no run failures. Do not enable Evaluations, Scheduled evaluations or Red teaming in this basic lab.",
   "expected": "The runs completed without errors, so Gen AI errors is empty.",
   "image": "assets/screenshots/en/45-agent-monitor-error-rate.png",
   "width": 1600,
   "height": 900,
   "seconds": 525.56,
   "capturedAt": "2026-11-18T22:17:06.737000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Gen AI errors",
     "x": 935,
     "y": 133,
     "width": 92,
     "height": 22
    }
   ],
   "videoSeconds": 525.56
  },
  {
   "id": "46-monitor-connected-resource",
   "title": "Recheck of the connected observability resource",
   "section": "monitor",
   "action": "In Monitor → Settings, check App. Insights resource=Connected and the name of your App Insights, then select Close.",
   "expected": "Application Insights is connected to this project.",
   "image": "assets/screenshots/en/46-monitor-connected-resource.png",
   "width": 1600,
   "height": 900,
   "seconds": 528.591,
   "capturedAt": "2026-11-18T22:17:09.768000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Connected status",
     "x": 466,
     "y": 212,
     "width": 138,
     "height": 20
    },
    {
     "label": "Connected resource",
     "x": 682,
     "y": 267,
     "width": 314,
     "height": 30
    }
   ],
   "videoSeconds": 528.591
  },
  {
   "id": "47-agent-trace-list",
   "title": "Match between the three runs and the trace list",
   "section": "traces",
   "action": "In Traces → Trace view, make sure Last Day is selected. Check that the token total of the three Completed traces matches Monitor, then open the latest Trace ID.",
   "expected": "The three runs appear as Completed traces.",
   "image": "assets/screenshots/en/47-agent-trace-list.png",
   "width": 1600,
   "height": 900,
   "seconds": 541.778,
   "capturedAt": "2026-11-18T22:17:22.955000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Open latest run's Trace ID",
     "x": 297,
     "y": 427,
     "width": 106,
     "height": 17
    },
    {
     "label": "Last Day",
     "x": 5,
     "y": 3,
     "width": 13,
     "height": 13
    }
   ],
   "videoSeconds": 541.778
  },
  {
   "id": "48-agent-trace-root-spans",
   "title": "Trace ID and the agent and model spans",
   "section": "traces",
   "action": "In the trace details, check the Trace ID, the Conversation ID and the two spans on the left, invoke_agent → chat. invoke_agent is the agent run and chat is the actual model call.",
   "expected": "One model call appears under the agent run.",
   "image": "assets/screenshots/en/48-agent-trace-root-spans.png",
   "width": 1600,
   "height": 900,
   "seconds": 547.589,
   "capturedAt": "2026-11-18T22:17:28.766000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Agent → model call structure",
     "x": 238,
     "y": 220,
     "width": 153,
     "height": 20
    },
    {
     "label": "Trace ID",
     "x": 498,
     "y": 52,
     "width": 240,
     "height": 20
    }
   ],
   "videoSeconds": 547.589
  },
  {
   "id": "49-agent-trace-input-output",
   "title": "Recorded question vs. actual response",
   "section": "traces",
   "action": "On the right, scroll down in Input + Output and check the last User input and Output. Compare them with the last question and answer in the Playground.",
   "expected": "The last question and the model's response are recorded as they were.",
   "image": "assets/screenshots/en/49-agent-trace-input-output.png",
   "width": 1600,
   "height": 900,
   "seconds": 550.022,
   "capturedAt": "2026-11-18T22:17:31.199000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Input + Output",
     "x": 1032,
     "y": 205,
     "width": 105,
     "height": 32
    }
   ],
   "videoSeconds": 550.022
  },
  {
   "id": "50-trace-response-and-guest-identity",
   "title": "Response ID and the user who actually ran it",
   "section": "traces",
   "action": "In Metadata, compare gen_ai.response.id with the Playground response ID. Also check gen_ai.conversation.id and user.id.",
   "expected": "The response ID, the conversation ID and the object ID of the user who ran it are recorded (the ID values are masked in the screenshot).",
   "image": "assets/screenshots/en/50-trace-response-and-guest-identity.png",
   "width": 1600,
   "height": 900,
   "seconds": 553.509,
   "capturedAt": "2026-11-18T22:17:34.686000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Response ID correlation",
     "x": 1136,
     "y": 327,
     "width": 168,
     "height": 16
    },
    {
     "label": "Conversation ID",
     "x": 1136,
     "y": 427,
     "width": 202,
     "height": 16
    },
    {
     "label": "Actual user's object ID",
     "x": 1136,
     "y": 587,
     "width": 76,
     "height": 16
    }
   ],
   "videoSeconds": 553.509
  },
  {
   "id": "51-trace-model-token-metadata",
   "title": "Input and output tokens of the model span",
   "section": "traces",
   "action": "Select the chat span on the left and check the actual model version and gen_ai.usage.input_tokens and output_tokens in Metadata.",
   "expected": "The input and output tokens of a single model call are recorded.",
   "image": "assets/screenshots/en/51-trace-model-token-metadata.png",
   "width": 1600,
   "height": 900,
   "seconds": 558.773,
   "capturedAt": "2026-11-18T22:17:39.950000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Model input tokens",
     "x": 1136,
     "y": 510,
     "width": 227,
     "height": 16
    },
    {
     "label": "Model output tokens",
     "x": 1136,
     "y": 530,
     "width": 235,
     "height": 16
    }
   ],
   "videoSeconds": 558.773
  },
  {
   "id": "52-agent-conversation-view",
   "title": "The three runs of one conversation, grouped",
   "section": "traces",
   "action": "Switch to Conversation view, check the conversation grouped under the same Conversation ID and open the ID.",
   "expected": "The three questions appear grouped under one conversation ID.",
   "image": "assets/screenshots/en/52-agent-conversation-view.png",
   "width": 1600,
   "height": 900,
   "seconds": 566.273,
   "capturedAt": "2026-11-18T22:17:47.450000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Conversation view",
     "x": 340,
     "y": 203,
     "width": 142,
     "height": 30
    },
    {
     "label": "Open conversation details",
     "x": 297,
     "y": 383,
     "width": 106,
     "height": 17
    }
   ],
   "videoSeconds": 566.273
  },
  {
   "id": "53-conversation-grouped-spans",
   "title": "Agent and model call structure in a conversation",
   "section": "traces",
   "action": "In the Trace tree of the conversation details, check the three agent runs and each model call.",
   "expected": "Three agent runs appear grouped in one conversation.",
   "image": "assets/screenshots/en/53-conversation-grouped-spans.png",
   "width": 1600,
   "height": 900,
   "seconds": 572.27,
   "capturedAt": "2026-11-18T22:17:53.447000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Three agent runs, one conversation",
     "x": 280,
     "y": 220,
     "width": 199,
     "height": 20
    }
   ],
   "videoSeconds": 572.27,
   "extra": true
  },
  {
   "id": "54-conversation-user-view",
   "title": "Conversation flow in User view",
   "section": "traces",
   "action": "In User view in the conversation details, check the questions and responses of Turns 1–3. Responses can differ each time; review their accuracy separately.",
   "expected": "The questions and responses of the three turns appear in order.",
   "image": "assets/screenshots/en/54-conversation-user-view.png",
   "width": 1600,
   "height": 900,
   "seconds": 575.74,
   "capturedAt": "2026-11-18T22:17:56.917000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "User view",
     "x": 226,
     "y": 93,
     "width": 76,
     "height": 32
    }
   ],
   "videoSeconds": 575.74,
   "extra": true
  }
 ],
 "instructions": "You are a Microsoft Foundry workshop assistant.\nAnswer in English, in at most 3 sentences, with only the essentials.\nThis workshop covers creating a Foundry resource and project, deploying the gpt-6.1-terra model, running an agent, and checking Monitor and Traces.\nYou have no tools to look up or change real Azure resources, so do not answer as if you had run anything.",
 "monitorMetrics": {
  "agentRuns": 3,
  "totalTokens": 675,
  "errorRate": 0,
  "dateRange": "Last Day",
  "verifiedAt": "2026-11-18T22:16:05.457Z"
 },
 "videoCues": [
  {
   "start": 10.193,
   "end": 16.356,
   "text": "01 · Sign-in with the issued Internal Guest account"
  },
  {
   "start": 16.406,
   "end": 21.915,
   "text": "02 · Operator-assigned resource group selection"
  },
  {
   "start": 21.965,
   "end": 29.965,
   "text": "03 · Assigned resource group and subscription"
  },
  {
   "start": 35.872,
   "end": 43.872,
   "text": "04 · The three required roles"
  },
  {
   "start": 54.344,
   "end": 62.344,
   "text": "05 · Start of Foundry creation in the Azure Portal"
  },
  {
   "start": 67.735,
   "end": 71.192,
   "text": "06 · Resource and default project names"
  },
  {
   "start": 71.242,
   "end": 74.811,
   "text": "07 · Default managed storage, left as is"
  },
  {
   "start": 74.861,
   "end": 78.963,
   "text": "08 · Default network for the workshop"
  },
  {
   "start": 79.013,
   "end": 82.508,
   "text": "09 · Default settings with no separate VNet connection"
  },
  {
   "start": 82.558,
   "end": 85.913,
   "text": "10 · Default system-assigned managed identity"
  },
  {
   "start": 85.963,
   "end": 89.318,
   "text": "11 · Default encryption with Microsoft-managed keys"
  },
  {
   "start": 89.368,
   "end": 97.368,
   "text": "12 · No extra tags before the review screen"
  },
  {
   "start": 183.592,
   "end": 191.592,
   "text": "13 · Resource and default project creation after review"
  },
  {
   "start": 200.074,
   "end": 208.074,
   "text": "14 · Foundry resource and default project deployment complete"
  },
  {
   "start": 219.605,
   "end": 227.605,
   "text": "15 · Foundry portal access from the created resource"
  },
  {
   "start": 239.878,
   "end": 247.878,
   "text": "16 · Default project home"
  },
  {
   "start": 260.494,
   "end": 268.494,
   "text": "18 · Start of a model deployment"
  },
  {
   "start": 275.724,
   "end": 283.516,
   "text": "19 · Catalog search for gpt-6.1-terra"
  },
  {
   "start": 283.566,
   "end": 285.521,
   "text": "20 · Model version check, then Deploy"
  },
  {
   "start": 285.571,
   "end": 293.571,
   "text": "21 · Custom deployment with the workshop quota"
  },
  {
   "start": 299.427,
   "end": 307.427,
   "text": "22 · Deployment with Global Standard · 10K TPM"
  },
  {
   "start": 317.393,
   "end": 322.311,
   "text": "23 · Removal of the default Web search tool"
  },
  {
   "start": 322.361,
   "end": 327.827,
   "text": "24 · Generation parameters for short lab responses"
  },
  {
   "start": 327.877,
   "end": 334.311,
   "text": "25 · First question to the deployed model"
  },
  {
   "start": 334.361,
   "end": 342.361,
   "text": "26 · The model's actual response"
  },
  {
   "start": 358.925,
   "end": 366.245,
   "text": "27 · Agent role and response rules"
  },
  {
   "start": 366.295,
   "end": 373.837,
   "text": "28 · Prompt Agent naming and creation"
  },
  {
   "start": 373.887,
   "end": 375.805,
   "text": "29 · Saved agent, model and instructions"
  },
  {
   "start": 375.855,
   "end": 383.855,
   "text": "30 · Removal of the default toolbox (Web search)"
  },
  {
   "start": 384.244,
   "end": 392.244,
   "text": "31 · Saved with empty Tools · Version 2"
  },
  {
   "start": 399.167,
   "end": 405.456,
   "text": "32 · Tracing connection check before the run"
  },
  {
   "start": 405.506,
   "end": 407.895,
   "text": "37 · Agent run response limit setting"
  },
  {
   "start": 407.945,
   "end": 412.163,
   "text": "38 · Saved version check · Save not needed"
  },
  {
   "start": 412.213,
   "end": 420.213,
   "text": "39 · First agent question after the connection"
  },
  {
   "start": 422.343,
   "end": 430.343,
   "text": "40 · First run response"
  },
  {
   "start": 433.265,
   "end": 441.265,
   "text": "41 · Follow-up question in the same conversation"
  },
  {
   "start": 446.834,
   "end": 454.834,
   "text": "42 · Follow-up question that states the lab scope"
  },
  {
   "start": 474.283,
   "end": 478.307,
   "text": "33 · Notice shown when App Insights is not connected"
  },
  {
   "start": 478.357,
   "end": 481.766,
   "text": "34 · Application insights resource name list"
  },
  {
   "start": 481.816,
   "end": 489.816,
   "text": "35 · Create new resource form check"
  },
  {
   "start": 493.96,
   "end": 501.96,
   "text": "36 · Connection complete · trace table shown"
  },
  {
   "start": 518.202,
   "end": 521.587,
   "text": "43 · Monitor overview and token usage"
  },
  {
   "start": 521.637,
   "end": 524.51,
   "text": "44 · Run count and token charts"
  },
  {
   "start": 524.56,
   "end": 527.541,
   "text": "45 · Error check"
  },
  {
   "start": 527.591,
   "end": 535.591,
   "text": "46 · Recheck of the connected observability resource"
  },
  {
   "start": 540.778,
   "end": 546.539,
   "text": "47 · Match between the three runs and the trace list"
  },
  {
   "start": 546.589,
   "end": 548.972,
   "text": "48 · Trace ID and the agent and model spans"
  },
  {
   "start": 549.022,
   "end": 552.459,
   "text": "49 · Recorded question vs. actual response"
  },
  {
   "start": 552.509,
   "end": 557.723,
   "text": "50 · Response ID and the user who actually ran it"
  },
  {
   "start": 557.773,
   "end": 565.223,
   "text": "51 · Input and output tokens of the model span"
  },
  {
   "start": 565.273,
   "end": 571.22,
   "text": "52 · The three runs of one conversation, grouped"
  },
  {
   "start": 571.27,
   "end": 574.69,
   "text": "53 · Agent and model call structure in a conversation"
  },
  {
   "start": 574.74,
   "end": 578.19,
   "text": "54 · Conversation flow in User view"
  }
 ]
};
