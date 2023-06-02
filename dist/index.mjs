// src/lib/Deserializer.ts
var DeSerializer = class {
  constructor() {
  }
  setBody(body) {
    this.data = body;
  }
  getResource() {
  }
  // altemate result return
  build() {
    return {
      relationshipNames: []
    };
  }
};

// src/jsonApi.ts
var JsonApi = class {
  constructor() {
    this.JsonDeserializer = DeSerializer;
  }
  deserialize(body) {
    const modelBuilder = new this.JsonDeserializer();
    if (typeof body === "string") {
    } else {
      modelBuilder.setBody(body);
    }
    return modelBuilder.build();
  }
};

// test/mockData.ts
var mockdata = {
  data: [
    {
      id: "897c900c-012d-41d3-8744-59958e97ed20",
      type: "job",
      attributes: {
        title: "dddddddddddddddddddddddddddddddddddddddddddddddd",
        deadline: "2023-05-07T23:55:51.359000",
        category: 101,
        vacancy: 5,
        created_at: "2023-05-08T05:56:44.566255+00:00",
        updated_at: "2023-05-08T06:13:22.522642+00:00",
        status: "L",
        version: 2
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/897c900c-012d-41d3-8744-59958e97ed20/relationships/job_description",
            related: "/api/job/897c900c-012d-41d3-8744-59958e97ed20/job_description"
          },
          data: {
            id: "023f50ea-3ec7-4c9a-9d2f-3f8faded5780",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/897c900c-012d-41d3-8744-59958e97ed20/relationships/job_specification",
            related: "/api/job/897c900c-012d-41d3-8744-59958e97ed20/job_specification"
          },
          data: {
            id: "fba57872-90ba-4ddf-a1c7-32eec807258d",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/897c900c-012d-41d3-8744-59958e97ed20"
      }
    },
    {
      id: "0fbe9cff-3822-455e-b1b5-19948f76ff06",
      type: "job",
      attributes: {
        title: "44",
        deadline: "2023-05-04T21:17:32.073000",
        category: 113,
        vacancy: 4,
        created_at: "2023-05-05T09:18:42.653667+00:00",
        updated_at: "2023-05-05T11:54:46.386489+00:00",
        status: "L",
        version: 3
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/0fbe9cff-3822-455e-b1b5-19948f76ff06/relationships/job_description",
            related: "/api/job/0fbe9cff-3822-455e-b1b5-19948f76ff06/job_description"
          },
          data: {
            id: "5a102b85-e6a1-4ece-90c9-2eebef208eea",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/0fbe9cff-3822-455e-b1b5-19948f76ff06/relationships/job_specification",
            related: "/api/job/0fbe9cff-3822-455e-b1b5-19948f76ff06/job_specification"
          },
          data: {
            id: "79318783-6f99-4ad8-a25e-168b058993e5",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/0fbe9cff-3822-455e-b1b5-19948f76ff06"
      }
    },
    {
      id: "3c4ee9ad-e331-499b-afb1-e9f4cf900a13",
      type: "job",
      attributes: {
        title: "Testtt",
        deadline: "2023-05-05T03:10:41.504000",
        category: 115,
        vacancy: 3,
        created_at: "2023-05-05T09:11:41.200315+00:00",
        updated_at: "2023-05-05T09:11:54.685354+00:00",
        status: "L",
        version: 2
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/3c4ee9ad-e331-499b-afb1-e9f4cf900a13/relationships/job_description",
            related: "/api/job/3c4ee9ad-e331-499b-afb1-e9f4cf900a13/job_description"
          },
          data: {
            id: "edc33756-1464-4ba0-bfd6-c07d10fc5a7f",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/3c4ee9ad-e331-499b-afb1-e9f4cf900a13/relationships/job_specification",
            related: "/api/job/3c4ee9ad-e331-499b-afb1-e9f4cf900a13/job_specification"
          },
          data: {
            id: "40c6dac9-6a72-4480-955f-2129186b547f",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/3c4ee9ad-e331-499b-afb1-e9f4cf900a13"
      }
    },
    {
      id: "af66c9ea-02a3-46ac-8e01-d852a09254c0",
      type: "job",
      attributes: {
        title: "1",
        deadline: "2023-05-03T16:29:10.662000",
        category: 104,
        vacancy: 1,
        created_at: "2023-05-04T16:29:50.332492+00:00",
        updated_at: "2023-05-05T09:13:20.852110+00:00",
        status: "D",
        version: 6
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/af66c9ea-02a3-46ac-8e01-d852a09254c0/relationships/job_description",
            related: "/api/job/af66c9ea-02a3-46ac-8e01-d852a09254c0/job_description"
          },
          data: {
            id: "037aa8f7-ef04-4b12-a8d6-01807c212f2e",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/af66c9ea-02a3-46ac-8e01-d852a09254c0/relationships/job_specification",
            related: "/api/job/af66c9ea-02a3-46ac-8e01-d852a09254c0/job_specification"
          },
          data: {
            id: "ef8c80b6-4754-466a-943f-554842d1fada",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/af66c9ea-02a3-46ac-8e01-d852a09254c0"
      }
    },
    {
      id: "0ea00757-2679-4df9-8e19-0016a84863ba",
      type: "job",
      attributes: {
        title: "Test Job",
        deadline: "2023-05-05T00:37:22",
        category: 94,
        vacancy: 1,
        created_at: "2023-05-04T06:38:48.252783+00:00",
        updated_at: "2023-05-04T20:47:59.546913+00:00",
        status: "L",
        version: 2
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/0ea00757-2679-4df9-8e19-0016a84863ba/relationships/job_description",
            related: "/api/job/0ea00757-2679-4df9-8e19-0016a84863ba/job_description"
          },
          data: {
            id: "1e723742-7c32-49b9-b9cd-5770eec0046a",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/0ea00757-2679-4df9-8e19-0016a84863ba/relationships/job_specification",
            related: "/api/job/0ea00757-2679-4df9-8e19-0016a84863ba/job_specification"
          },
          data: {
            id: "8c3120fe-5179-4ca5-8b7b-9ab57d5500a0",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/0ea00757-2679-4df9-8e19-0016a84863ba"
      }
    },
    {
      id: "7c8d4e78-ac69-4f3b-9a01-87a1aaab7305",
      type: "job",
      attributes: {
        title: "Test Job",
        deadline: "2023-05-05T06:36:30",
        category: 94,
        vacancy: 1,
        created_at: "2023-05-04T06:37:08.217600+00:00",
        status: "L",
        version: 1
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/7c8d4e78-ac69-4f3b-9a01-87a1aaab7305/relationships/job_description",
            related: "/api/job/7c8d4e78-ac69-4f3b-9a01-87a1aaab7305/job_description"
          },
          data: {
            id: "d21c768d-61f4-40bb-8b42-bdd4d3b43b39",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/7c8d4e78-ac69-4f3b-9a01-87a1aaab7305/relationships/job_specification",
            related: "/api/job/7c8d4e78-ac69-4f3b-9a01-87a1aaab7305/job_specification"
          },
          data: {
            id: "e4369fae-5f39-4275-8b0c-be7424c329c3",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/7c8d4e78-ac69-4f3b-9a01-87a1aaab7305"
      }
    },
    {
      id: "02db74c5-2b55-47bd-b742-834ef9313aaa",
      type: "job",
      attributes: {
        title: "Test Job",
        deadline: "2023-05-05T06:35:36",
        category: 94,
        vacancy: 1,
        created_at: "2023-05-04T06:36:28.644237+00:00",
        status: "L",
        version: 1
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/02db74c5-2b55-47bd-b742-834ef9313aaa/relationships/job_description",
            related: "/api/job/02db74c5-2b55-47bd-b742-834ef9313aaa/job_description"
          },
          data: {
            id: "3e1cc248-6c93-4e0b-a759-aeec4146f479",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/02db74c5-2b55-47bd-b742-834ef9313aaa/relationships/job_specification",
            related: "/api/job/02db74c5-2b55-47bd-b742-834ef9313aaa/job_specification"
          },
          data: {
            id: "33d05402-7df5-4b4a-908e-22c132b47ed7",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/02db74c5-2b55-47bd-b742-834ef9313aaa"
      }
    },
    {
      id: "bd2f00bf-d758-430e-a7ad-4f96a1358d68",
      type: "job",
      attributes: {
        title: "Test label",
        deadline: "2023-05-26T00:23:29",
        category: 95,
        vacancy: 9,
        created_at: "2023-05-04T06:30:19.814213+00:00",
        updated_at: "2023-05-04T06:31:04.647391+00:00",
        status: "L",
        version: 2
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/bd2f00bf-d758-430e-a7ad-4f96a1358d68/relationships/job_description",
            related: "/api/job/bd2f00bf-d758-430e-a7ad-4f96a1358d68/job_description"
          },
          data: {
            id: "1e96eef3-b7bd-42b4-8854-c3b855262760",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/bd2f00bf-d758-430e-a7ad-4f96a1358d68/relationships/job_specification",
            related: "/api/job/bd2f00bf-d758-430e-a7ad-4f96a1358d68/job_specification"
          },
          data: {
            id: "0d1ad1fd-9194-4857-b350-ee114aa6bfd2",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/bd2f00bf-d758-430e-a7ad-4f96a1358d68"
      }
    },
    {
      id: "6d4dbd05-e1fe-4b83-9952-c140f02d8699",
      type: "job",
      attributes: {
        title: "Test 3",
        deadline: "2023-05-03T07:51:03.353000",
        category: 87,
        vacancy: 3,
        created_at: "2023-05-03T13:51:58.737751+00:00",
        updated_at: "2023-05-03T13:52:22.820449+00:00",
        status: "L",
        version: 2
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/6d4dbd05-e1fe-4b83-9952-c140f02d8699/relationships/job_description",
            related: "/api/job/6d4dbd05-e1fe-4b83-9952-c140f02d8699/job_description"
          },
          data: {
            id: "3d589980-34d3-4ebf-acc1-bfaa38583cfe",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/6d4dbd05-e1fe-4b83-9952-c140f02d8699/relationships/job_specification",
            related: "/api/job/6d4dbd05-e1fe-4b83-9952-c140f02d8699/job_specification"
          },
          data: {
            id: "e1b1035d-2ace-401d-a4d2-70922c459672",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/6d4dbd05-e1fe-4b83-9952-c140f02d8699"
      }
    },
    {
      id: "62134cef-4412-44ab-8a75-47ecd0aa8ea2",
      type: "job",
      attributes: {
        title: "Label Test",
        deadline: "2023-05-02T13:24:48.207000",
        category: 77,
        vacancy: 3,
        created_at: "2023-05-03T13:34:06.758070+00:00",
        updated_at: "2023-05-05T05:55:25.630214+00:00",
        status: "L",
        version: 5
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/62134cef-4412-44ab-8a75-47ecd0aa8ea2/relationships/job_description",
            related: "/api/job/62134cef-4412-44ab-8a75-47ecd0aa8ea2/job_description"
          },
          data: {
            id: "7f64b532-b826-4c3e-b069-5a994273f3d7",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/62134cef-4412-44ab-8a75-47ecd0aa8ea2/relationships/job_specification",
            related: "/api/job/62134cef-4412-44ab-8a75-47ecd0aa8ea2/job_specification"
          },
          data: {
            id: "a90210bd-df19-42f1-b88d-127bb15f5b41",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/62134cef-4412-44ab-8a75-47ecd0aa8ea2"
      }
    },
    {
      id: "e7bb0a97-81c3-45e4-b8a3-bbe14aae5bcd",
      type: "job",
      attributes: {
        title: "zxz",
        deadline: "2023-05-03T05:19:20.419000",
        category: 101,
        vacancy: 2,
        created_at: "2023-05-03T11:19:45.802522+00:00",
        updated_at: "2023-05-04T15:00:18.503600+00:00",
        status: "L",
        version: 2
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/e7bb0a97-81c3-45e4-b8a3-bbe14aae5bcd/relationships/job_description",
            related: "/api/job/e7bb0a97-81c3-45e4-b8a3-bbe14aae5bcd/job_description"
          },
          data: {
            id: "0c6c3475-440d-4483-a981-47e851d0d769",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/e7bb0a97-81c3-45e4-b8a3-bbe14aae5bcd/relationships/job_specification",
            related: "/api/job/e7bb0a97-81c3-45e4-b8a3-bbe14aae5bcd/job_specification"
          },
          data: {
            id: "dd7bea3f-64bc-4044-bde0-5587213900c2",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/e7bb0a97-81c3-45e4-b8a3-bbe14aae5bcd"
      }
    },
    {
      id: "88a66f84-5279-4951-ba81-a1f70dd6a8a3",
      type: "job",
      attributes: {
        title: "tt",
        deadline: "2023-05-26T17:38:16",
        category: 3,
        vacancy: 6,
        created_at: "2023-05-02T05:40:53.232529+00:00",
        updated_at: "2023-05-02T05:41:35.753914+00:00",
        status: "L",
        version: 3
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/88a66f84-5279-4951-ba81-a1f70dd6a8a3/relationships/job_description",
            related: "/api/job/88a66f84-5279-4951-ba81-a1f70dd6a8a3/job_description"
          },
          data: {
            id: "2de43aa3-5164-4f6d-bfd2-5a1419a68fdb",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/88a66f84-5279-4951-ba81-a1f70dd6a8a3/relationships/job_specification",
            related: "/api/job/88a66f84-5279-4951-ba81-a1f70dd6a8a3/job_specification"
          },
          data: {
            id: "084cec33-0f9b-4847-9736-95614dba0578",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/88a66f84-5279-4951-ba81-a1f70dd6a8a3"
      }
    },
    {
      id: "7c5a5f19-f661-431f-babe-98fc50d6af8a",
      type: "job",
      attributes: {
        title: "Senior JS Developer",
        deadline: "2023-04-25T16:44:38.715000",
        category: 2,
        vacancy: 7,
        created_at: "2023-04-26T10:49:01.542421+00:00",
        updated_at: "2023-05-03T11:30:27.389538+00:00",
        status: "L",
        version: 4
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/7c5a5f19-f661-431f-babe-98fc50d6af8a/relationships/job_description",
            related: "/api/job/7c5a5f19-f661-431f-babe-98fc50d6af8a/job_description"
          },
          data: {
            id: "eb1305d2-4696-4e42-b4e8-702ec8d32f51",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/7c5a5f19-f661-431f-babe-98fc50d6af8a/relationships/job_specification",
            related: "/api/job/7c5a5f19-f661-431f-babe-98fc50d6af8a/job_specification"
          },
          data: {
            id: "2cf899b5-8f6f-4586-abf7-aca50c5b0eec",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/7c5a5f19-f661-431f-babe-98fc50d6af8a"
      }
    },
    {
      id: "8961a801-92df-4d65-a9b1-9f63e05e1686",
      type: "job",
      attributes: {
        title: "dffd",
        deadline: "2023-05-06T02:47:00",
        category: 3,
        vacancy: 45,
        created_at: "2023-04-26T08:47:34.502377+00:00",
        updated_at: "2023-04-26T10:49:47.697608+00:00",
        status: "D",
        version: 3
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/8961a801-92df-4d65-a9b1-9f63e05e1686/relationships/job_description",
            related: "/api/job/8961a801-92df-4d65-a9b1-9f63e05e1686/job_description"
          },
          data: {
            id: "4fbfbdfe-565b-4190-9d4c-9d60c1d17d25",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/8961a801-92df-4d65-a9b1-9f63e05e1686/relationships/job_specification",
            related: "/api/job/8961a801-92df-4d65-a9b1-9f63e05e1686/job_specification"
          },
          data: {
            id: "87e80613-48a1-443f-a38b-e41ca3ef7c03",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/8961a801-92df-4d65-a9b1-9f63e05e1686"
      }
    },
    {
      id: "d029d524-f9dd-408f-9454-8f34e4a29361",
      type: "job",
      attributes: {
        title: "aak",
        deadline: "2023-05-26T08:31:44",
        category: 2,
        vacancy: 1,
        created_at: "2023-04-26T08:34:21.469835+00:00",
        updated_at: "2023-04-26T08:35:00.651738+00:00",
        status: "D",
        version: 2
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/d029d524-f9dd-408f-9454-8f34e4a29361/relationships/job_description",
            related: "/api/job/d029d524-f9dd-408f-9454-8f34e4a29361/job_description"
          },
          data: {
            id: "c44a7e6e-6888-4928-9379-a3363cfcca09",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/d029d524-f9dd-408f-9454-8f34e4a29361/relationships/job_specification",
            related: "/api/job/d029d524-f9dd-408f-9454-8f34e4a29361/job_specification"
          },
          data: {
            id: "b7e889a2-af69-4189-9738-93f900264f76",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/d029d524-f9dd-408f-9454-8f34e4a29361"
      }
    },
    {
      id: "ceff3654-ca75-4a92-a273-c1036c3d5e78",
      type: "job",
      attributes: {
        title: "Test 6",
        deadline: "2023-05-03T02:26:41",
        category: 3,
        vacancy: 12,
        created_at: "2023-04-26T08:29:25.400061+00:00",
        updated_at: "2023-05-03T11:17:57.442737+00:00",
        status: "L",
        version: 14
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/ceff3654-ca75-4a92-a273-c1036c3d5e78/relationships/job_description",
            related: "/api/job/ceff3654-ca75-4a92-a273-c1036c3d5e78/job_description"
          },
          data: {
            id: "a990590a-f0a8-4a7e-a9c3-42feeb12119c",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/ceff3654-ca75-4a92-a273-c1036c3d5e78/relationships/job_specification",
            related: "/api/job/ceff3654-ca75-4a92-a273-c1036c3d5e78/job_specification"
          },
          data: {
            id: "bcbdbc16-7c3a-45db-a469-36f32d9a8a86",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/ceff3654-ca75-4a92-a273-c1036c3d5e78"
      }
    },
    {
      id: "67b3d79a-75bd-4e4b-a02b-589316b0454c",
      type: "job",
      attributes: {
        title: "Job test",
        deadline: "2023-04-29T15:07:04",
        category: 3,
        vacancy: 5,
        created_at: "2023-04-25T15:07:58.987781+00:00",
        updated_at: "2023-04-26T08:29:58.051183+00:00",
        status: "L",
        version: 9
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/67b3d79a-75bd-4e4b-a02b-589316b0454c/relationships/job_description",
            related: "/api/job/67b3d79a-75bd-4e4b-a02b-589316b0454c/job_description"
          },
          data: {
            id: "28d71004-da27-46f8-9951-22a0435ecd11",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/67b3d79a-75bd-4e4b-a02b-589316b0454c/relationships/job_specification",
            related: "/api/job/67b3d79a-75bd-4e4b-a02b-589316b0454c/job_specification"
          },
          data: {
            id: "c678de4c-e6c2-4980-ba18-e6754731a652",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/67b3d79a-75bd-4e4b-a02b-589316b0454c"
      }
    },
    {
      id: "4da22d89-2230-46a6-94f1-03aafd688c4e",
      type: "job",
      attributes: {
        title: "XYZ",
        deadline: "2023-05-07T09:06:38",
        category: 3,
        vacancy: 5,
        created_at: "2023-04-25T09:09:42.432359+00:00",
        updated_at: "2023-04-26T08:30:09.290657+00:00",
        status: "L",
        version: 7
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/4da22d89-2230-46a6-94f1-03aafd688c4e/relationships/job_description",
            related: "/api/job/4da22d89-2230-46a6-94f1-03aafd688c4e/job_description"
          },
          data: {
            id: "7ed3ca09-8252-4975-a00e-714e663321fb",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/4da22d89-2230-46a6-94f1-03aafd688c4e/relationships/job_specification",
            related: "/api/job/4da22d89-2230-46a6-94f1-03aafd688c4e/job_specification"
          },
          data: {
            id: "54b57ff5-df2b-4693-a42f-fedaba14c316",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/4da22d89-2230-46a6-94f1-03aafd688c4e"
      }
    },
    {
      id: "fdc22362-f59c-4a34-9a2a-2cb4a8475d68",
      type: "job",
      attributes: {
        title: "121",
        deadline: "2023-04-20T21:09:31.677000",
        category: 2,
        vacancy: 1,
        created_at: "2023-04-20T21:10:21.355252+00:00",
        updated_at: "2023-04-20T21:11:56.689295+00:00",
        status: "D",
        version: 4
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/fdc22362-f59c-4a34-9a2a-2cb4a8475d68/relationships/job_description",
            related: "/api/job/fdc22362-f59c-4a34-9a2a-2cb4a8475d68/job_description"
          },
          data: {
            id: "f136ca24-f89e-4879-9574-03ac66e4aefc",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/fdc22362-f59c-4a34-9a2a-2cb4a8475d68/relationships/job_specification",
            related: "/api/job/fdc22362-f59c-4a34-9a2a-2cb4a8475d68/job_specification"
          },
          data: {
            id: "c478866d-6cae-4d3a-a9dc-606f7dc41518",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/fdc22362-f59c-4a34-9a2a-2cb4a8475d68"
      }
    },
    {
      id: "ab551c6e-35d7-492f-96dd-3b9404c2880e",
      type: "job",
      attributes: {
        title: "QA Tester",
        deadline: "2023-05-13T06:39:06",
        category: 2,
        vacancy: 5,
        created_at: "2023-04-20T18:40:57.622963+00:00",
        updated_at: "2023-04-25T15:03:54.512300+00:00",
        status: "L",
        version: 3
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/ab551c6e-35d7-492f-96dd-3b9404c2880e/relationships/job_description",
            related: "/api/job/ab551c6e-35d7-492f-96dd-3b9404c2880e/job_description"
          },
          data: {
            id: "30a1607b-d6f8-4134-981b-7a5ea6fc902c",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/ab551c6e-35d7-492f-96dd-3b9404c2880e/relationships/job_specification",
            related: "/api/job/ab551c6e-35d7-492f-96dd-3b9404c2880e/job_specification"
          },
          data: {
            id: "eb22fb00-5369-40ee-9d1d-ce3e36428905",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/ab551c6e-35d7-492f-96dd-3b9404c2880e"
      }
    },
    {
      id: "3296f4ef-b784-45d4-99fe-a064f744797f",
      type: "job",
      attributes: {
        title: "Lead Data Scientist",
        deadline: "2023-05-04T18:36:07",
        category: 2,
        vacancy: 4,
        created_at: "2023-04-20T18:37:35.918572+00:00",
        status: "L",
        version: 1
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/3296f4ef-b784-45d4-99fe-a064f744797f/relationships/job_description",
            related: "/api/job/3296f4ef-b784-45d4-99fe-a064f744797f/job_description"
          },
          data: {
            id: "3668c373-f48e-429d-9fe0-ff37bdf39245",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/3296f4ef-b784-45d4-99fe-a064f744797f/relationships/job_specification",
            related: "/api/job/3296f4ef-b784-45d4-99fe-a064f744797f/job_specification"
          },
          data: {
            id: "06193a6f-a7bd-4996-a27d-057029864a16",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/3296f4ef-b784-45d4-99fe-a064f744797f"
      }
    },
    {
      id: "e1e79c93-8620-4f59-89b4-71f4d666a962",
      type: "job",
      attributes: {
        title: "Python Developer",
        deadline: "2023-05-11T12:33:55",
        category: 2,
        vacancy: 5,
        created_at: "2023-04-20T18:35:32.520095+00:00",
        updated_at: "2023-04-20T18:35:58.900146+00:00",
        status: "L",
        version: 2
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/e1e79c93-8620-4f59-89b4-71f4d666a962/relationships/job_description",
            related: "/api/job/e1e79c93-8620-4f59-89b4-71f4d666a962/job_description"
          },
          data: {
            id: "86492fcc-c8d1-44f1-b8a2-4dbeddfdf188",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/e1e79c93-8620-4f59-89b4-71f4d666a962/relationships/job_specification",
            related: "/api/job/e1e79c93-8620-4f59-89b4-71f4d666a962/job_specification"
          },
          data: {
            id: "0b300e76-9138-4ff6-85d8-8c14468e6eaa",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/e1e79c93-8620-4f59-89b4-71f4d666a962"
      }
    },
    {
      id: "4f5655ee-b520-4996-8b2d-3cbe982107e1",
      type: "job",
      attributes: {
        title: "gdshgs",
        deadline: "2023-04-27T04:01:18",
        category: 4,
        vacancy: 2,
        created_at: "2023-04-20T10:02:50.064313+00:00",
        updated_at: "2023-04-25T14:44:30.233951+00:00",
        status: "L",
        version: 3
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/4f5655ee-b520-4996-8b2d-3cbe982107e1/relationships/job_description",
            related: "/api/job/4f5655ee-b520-4996-8b2d-3cbe982107e1/job_description"
          },
          data: {
            id: "12df26ca-b4bd-4b34-8692-f1461ec3fea9",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/4f5655ee-b520-4996-8b2d-3cbe982107e1/relationships/job_specification",
            related: "/api/job/4f5655ee-b520-4996-8b2d-3cbe982107e1/job_specification"
          },
          data: {
            id: "b9a5e447-179f-4a80-9cc5-fdbec55a269e",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/4f5655ee-b520-4996-8b2d-3cbe982107e1"
      }
    },
    {
      id: "2b5c1b3b-3f03-4fe4-ad60-9be1c71cf950",
      type: "job",
      attributes: {
        title: "ABC",
        deadline: "2023-04-28T02:40:48",
        category: 3,
        vacancy: 40,
        created_at: "2023-04-20T08:43:06.420575+00:00",
        updated_at: "2023-04-20T09:54:33.383826+00:00",
        status: "D",
        version: 3
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/2b5c1b3b-3f03-4fe4-ad60-9be1c71cf950/relationships/job_description",
            related: "/api/job/2b5c1b3b-3f03-4fe4-ad60-9be1c71cf950/job_description"
          },
          data: {
            id: "a0ed4c5e-bb2a-4664-af0e-81f6049b1713",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/2b5c1b3b-3f03-4fe4-ad60-9be1c71cf950/relationships/job_specification",
            related: "/api/job/2b5c1b3b-3f03-4fe4-ad60-9be1c71cf950/job_specification"
          },
          data: {
            id: "3e8ab158-6d48-42ad-a779-c2f502686867",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/2b5c1b3b-3f03-4fe4-ad60-9be1c71cf950"
      }
    },
    {
      id: "73c9d2a5-49a4-4e65-8f1c-326b9fcc9d50",
      type: "job",
      attributes: {
        title: "UX Researcher",
        deadline: "2023-05-04T23:51:39",
        category: 2,
        vacancy: 60,
        created_at: "2023-04-20T06:00:33.798282+00:00",
        updated_at: "2023-04-26T08:33:09.904556+00:00",
        status: "L",
        version: 2
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/73c9d2a5-49a4-4e65-8f1c-326b9fcc9d50/relationships/job_description",
            related: "/api/job/73c9d2a5-49a4-4e65-8f1c-326b9fcc9d50/job_description"
          },
          data: {
            id: "a862ca7c-0638-4e3a-871f-a01b08dda7b8",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/73c9d2a5-49a4-4e65-8f1c-326b9fcc9d50/relationships/job_specification",
            related: "/api/job/73c9d2a5-49a4-4e65-8f1c-326b9fcc9d50/job_specification"
          },
          data: {
            id: "f37a8a9f-52c2-4bc6-89bc-6d0ac76c4946",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/73c9d2a5-49a4-4e65-8f1c-326b9fcc9d50"
      }
    },
    {
      id: "3cdbe409-70e8-4f68-9198-5980b17b9a73",
      type: "job",
      attributes: {
        title: "Full Stack Developer",
        deadline: "2023-05-03T05:23:57",
        category: 2,
        vacancy: 19,
        created_at: "2023-04-20T05:26:42.604316+00:00",
        updated_at: "2023-04-20T05:51:18.096775+00:00",
        status: "D",
        version: 2
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/3cdbe409-70e8-4f68-9198-5980b17b9a73/relationships/job_description",
            related: "/api/job/3cdbe409-70e8-4f68-9198-5980b17b9a73/job_description"
          },
          data: {
            id: "d34a3087-38e1-4249-bcd6-5f61b4a616d7",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/3cdbe409-70e8-4f68-9198-5980b17b9a73/relationships/job_specification",
            related: "/api/job/3cdbe409-70e8-4f68-9198-5980b17b9a73/job_specification"
          },
          data: {
            id: "40d4a466-89a2-49d6-bbda-1b8371e0773a",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/3cdbe409-70e8-4f68-9198-5980b17b9a73"
      }
    },
    {
      id: "b55857d8-6e66-44b9-b277-ce6ebe14ae71",
      type: "job",
      attributes: {
        title: "Cyber Security Specialist",
        deadline: "2023-05-03T23:17:16",
        category: 2,
        vacancy: 10,
        created_at: "2023-04-20T05:19:34.720386+00:00",
        updated_at: "2023-04-26T08:37:21.722805+00:00",
        status: "L",
        version: 2
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/b55857d8-6e66-44b9-b277-ce6ebe14ae71/relationships/job_description",
            related: "/api/job/b55857d8-6e66-44b9-b277-ce6ebe14ae71/job_description"
          },
          data: {
            id: "94f36f6b-4383-472c-881a-039703426a10",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/b55857d8-6e66-44b9-b277-ce6ebe14ae71/relationships/job_specification",
            related: "/api/job/b55857d8-6e66-44b9-b277-ce6ebe14ae71/job_specification"
          },
          data: {
            id: "cfc18776-3eed-443d-997e-4189c9caf544",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/b55857d8-6e66-44b9-b277-ce6ebe14ae71"
      }
    },
    {
      id: "5b97c963-07ae-4211-9621-c3f935ca67af",
      type: "job",
      attributes: {
        title: "Android Engineer",
        deadline: "2023-06-08T22:31:23",
        category: 2,
        vacancy: 10,
        created_at: "2023-04-20T05:01:51.461738+00:00",
        updated_at: "2023-04-20T05:05:12.429354+00:00",
        status: "L",
        version: 3
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/5b97c963-07ae-4211-9621-c3f935ca67af/relationships/job_description",
            related: "/api/job/5b97c963-07ae-4211-9621-c3f935ca67af/job_description"
          },
          data: {
            id: "3c3525dd-7a16-4d91-9b9a-86120f25b002",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/5b97c963-07ae-4211-9621-c3f935ca67af/relationships/job_specification",
            related: "/api/job/5b97c963-07ae-4211-9621-c3f935ca67af/job_specification"
          },
          data: {
            id: "ab110c7d-ec34-411b-bb2e-66989cfc02dc",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/5b97c963-07ae-4211-9621-c3f935ca67af"
      }
    },
    {
      id: "ba98a8fc-1c74-4179-8531-73d877bdc3ed",
      type: "job",
      attributes: {
        title: "Final job test Edit",
        deadline: "2023-04-22T05:12:35",
        category: 2,
        vacancy: 5,
        created_at: "2023-04-19T17:13:48.811346+00:00",
        updated_at: "2023-04-26T08:51:54.482304+00:00",
        status: "L",
        version: 7
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/ba98a8fc-1c74-4179-8531-73d877bdc3ed/relationships/job_description",
            related: "/api/job/ba98a8fc-1c74-4179-8531-73d877bdc3ed/job_description"
          },
          data: {
            id: "03d94ea5-6aec-4cbe-a77c-c87cc2ed3a04",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/ba98a8fc-1c74-4179-8531-73d877bdc3ed/relationships/job_specification",
            related: "/api/job/ba98a8fc-1c74-4179-8531-73d877bdc3ed/job_specification"
          },
          data: {
            id: "9dcc0324-d981-486a-b7c7-dfc3c4109f7b",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/ba98a8fc-1c74-4179-8531-73d877bdc3ed"
      }
    },
    {
      id: "1fa6b306-26ff-46aa-8d17-2aa6b923d5d7",
      type: "job",
      attributes: {
        title: "Final preview test",
        deadline: "2023-04-19T16:31:16.370000",
        category: 3,
        vacancy: 1e3,
        created_at: "2023-04-19T16:35:25.017243+00:00",
        status: "L",
        version: 1
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/1fa6b306-26ff-46aa-8d17-2aa6b923d5d7/relationships/job_description",
            related: "/api/job/1fa6b306-26ff-46aa-8d17-2aa6b923d5d7/job_description"
          },
          data: {
            id: "0bd99e2d-3a34-4227-8b3f-f15b49d2cd46",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/1fa6b306-26ff-46aa-8d17-2aa6b923d5d7/relationships/job_specification",
            related: "/api/job/1fa6b306-26ff-46aa-8d17-2aa6b923d5d7/job_specification"
          },
          data: {
            id: "ed862921-8be1-4245-b484-7aea129d9ddd",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/1fa6b306-26ff-46aa-8d17-2aa6b923d5d7"
      }
    },
    {
      id: "0aa1e262-8975-4a37-b01f-aba717845f39",
      type: "job",
      attributes: {
        title: "This is 2nd job test",
        deadline: "2023-04-19T16:29:50.369000",
        category: 2,
        vacancy: 1e3,
        created_at: "2023-04-19T16:31:12.775113+00:00",
        status: "L",
        version: 1
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/0aa1e262-8975-4a37-b01f-aba717845f39/relationships/job_description",
            related: "/api/job/0aa1e262-8975-4a37-b01f-aba717845f39/job_description"
          },
          data: {
            id: "53959587-51e4-4cab-9436-7e5e8762eb4d",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/0aa1e262-8975-4a37-b01f-aba717845f39/relationships/job_specification",
            related: "/api/job/0aa1e262-8975-4a37-b01f-aba717845f39/job_specification"
          },
          data: {
            id: "f8d202f5-84e0-44aa-9b23-68fa126f96cb",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/0aa1e262-8975-4a37-b01f-aba717845f39"
      }
    },
    {
      id: "ef7f77df-5044-4313-98cf-d4d3b16515e3",
      type: "job",
      attributes: {
        title: "Job preview test",
        deadline: "2023-04-22T16:24:06",
        category: 3,
        vacancy: 5,
        created_at: "2023-04-19T16:25:48.486242+00:00",
        status: "L",
        version: 1
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/ef7f77df-5044-4313-98cf-d4d3b16515e3/relationships/job_description",
            related: "/api/job/ef7f77df-5044-4313-98cf-d4d3b16515e3/job_description"
          },
          data: {
            id: "9669e5e0-2225-4d9c-b03e-f5084ff0ead2",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/ef7f77df-5044-4313-98cf-d4d3b16515e3/relationships/job_specification",
            related: "/api/job/ef7f77df-5044-4313-98cf-d4d3b16515e3/job_specification"
          },
          data: {
            id: "246e9a2e-69b0-4855-b865-4a3d78aa7e90",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/ef7f77df-5044-4313-98cf-d4d3b16515e3"
      }
    },
    {
      id: "5b4d1e32-8e3b-479c-b12f-b92ecd647a79",
      type: "job",
      attributes: {
        title: "this",
        deadline: "2023-04-19T14:24:41.381000",
        category: 3,
        vacancy: 5,
        created_at: "2023-04-19T14:25:14.966688+00:00",
        updated_at: "2023-04-19T16:20:07.376736+00:00",
        status: "D",
        version: 3
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/5b4d1e32-8e3b-479c-b12f-b92ecd647a79/relationships/job_description",
            related: "/api/job/5b4d1e32-8e3b-479c-b12f-b92ecd647a79/job_description"
          },
          data: {
            id: "99edc99f-b492-4a0d-94f5-0dbfdfee9707",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/5b4d1e32-8e3b-479c-b12f-b92ecd647a79/relationships/job_specification",
            related: "/api/job/5b4d1e32-8e3b-479c-b12f-b92ecd647a79/job_specification"
          },
          data: {
            id: "e94f06fa-e6a5-4296-9155-dd15f0802120",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/5b4d1e32-8e3b-479c-b12f-b92ecd647a79"
      }
    },
    {
      id: "59de154b-3dac-49e9-8472-974365963dcb",
      type: "job",
      attributes: {
        title: "This job",
        deadline: "2023-04-19T14:17:12.307000",
        category: 3,
        vacancy: 4,
        created_at: "2023-04-19T14:17:56.660659+00:00",
        updated_at: "2023-04-19T14:18:11.577439+00:00",
        status: "L",
        version: 2
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/59de154b-3dac-49e9-8472-974365963dcb/relationships/job_description",
            related: "/api/job/59de154b-3dac-49e9-8472-974365963dcb/job_description"
          },
          data: {
            id: "ab043991-0caf-4e3f-b60f-9a684438d2c5",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/59de154b-3dac-49e9-8472-974365963dcb/relationships/job_specification",
            related: "/api/job/59de154b-3dac-49e9-8472-974365963dcb/job_specification"
          },
          data: {
            id: "a25adcf0-5f81-46c2-ba7e-7aba4d6a7eed",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/59de154b-3dac-49e9-8472-974365963dcb"
      }
    },
    {
      id: "4c92a524-d532-4c49-98a9-7969b22f4c78",
      type: "job",
      attributes: {
        title: "Job should be saved just here!",
        deadline: "2023-04-19T11:02:53.524000",
        category: 2,
        vacancy: 1,
        created_at: "2023-04-19T11:04:55.533186+00:00",
        status: "L",
        version: 1
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/4c92a524-d532-4c49-98a9-7969b22f4c78/relationships/job_description",
            related: "/api/job/4c92a524-d532-4c49-98a9-7969b22f4c78/job_description"
          },
          data: {
            id: "32b66067-e0ca-4862-a10b-222c66419302",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/4c92a524-d532-4c49-98a9-7969b22f4c78/relationships/job_specification",
            related: "/api/job/4c92a524-d532-4c49-98a9-7969b22f4c78/job_specification"
          },
          data: {
            id: "1830f83b-64dd-48c5-b34e-1578e7db601d",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/4c92a524-d532-4c49-98a9-7969b22f4c78"
      }
    },
    {
      id: "89dfa953-8ec0-4ac5-b1c5-e6647a5e7cd7",
      type: "job",
      attributes: {
        title: "JS Developer",
        deadline: "2023-04-26T22:06:44",
        category: 2,
        vacancy: 5,
        created_at: "2023-04-19T10:08:47.717142+00:00",
        updated_at: "2023-05-04T10:53:04.118463+00:00",
        status: "L",
        version: 8
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/89dfa953-8ec0-4ac5-b1c5-e6647a5e7cd7/relationships/job_description",
            related: "/api/job/89dfa953-8ec0-4ac5-b1c5-e6647a5e7cd7/job_description"
          },
          data: {
            id: "11bfdba1-79d5-4336-b456-623a3b5a00a4",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/89dfa953-8ec0-4ac5-b1c5-e6647a5e7cd7/relationships/job_specification",
            related: "/api/job/89dfa953-8ec0-4ac5-b1c5-e6647a5e7cd7/job_specification"
          },
          data: {
            id: "a254e3c6-0e0e-4583-ad55-b710138f9a3a",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/89dfa953-8ec0-4ac5-b1c5-e6647a5e7cd7"
      }
    },
    {
      id: "4d18009b-3218-4aa2-be3a-b2b437edbffa",
      type: "job",
      attributes: {
        title: "Full Stack Developer",
        deadline: "2023-05-31T08:03:46",
        category: 2,
        vacancy: 10,
        created_at: "2023-04-19T08:07:57.938541+00:00",
        updated_at: "2023-04-19T08:19:02.827349+00:00",
        status: "D",
        version: 2
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/4d18009b-3218-4aa2-be3a-b2b437edbffa/relationships/job_description",
            related: "/api/job/4d18009b-3218-4aa2-be3a-b2b437edbffa/job_description"
          },
          data: {
            id: "57e4dc07-c6af-4ac2-8357-4a0e1fbc17fc",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/4d18009b-3218-4aa2-be3a-b2b437edbffa/relationships/job_specification",
            related: "/api/job/4d18009b-3218-4aa2-be3a-b2b437edbffa/job_specification"
          },
          data: {
            id: "8c45d837-837e-419e-bbe4-6f0b3d67c764",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/4d18009b-3218-4aa2-be3a-b2b437edbffa"
      }
    },
    {
      id: "5713d41f-92a5-455c-b6fe-cefaf1699ab6",
      type: "job",
      attributes: {
        title: "test job",
        deadline: "2023-04-18T23:15:15.622000",
        category: 2,
        vacancy: 7,
        created_at: "2023-04-19T05:17:00.468070+00:00",
        updated_at: "2023-05-04T10:36:43.453779+00:00",
        status: "L",
        version: 3
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/5713d41f-92a5-455c-b6fe-cefaf1699ab6/relationships/job_description",
            related: "/api/job/5713d41f-92a5-455c-b6fe-cefaf1699ab6/job_description"
          },
          data: {
            id: "b4bf3991-886f-4afd-b7d6-66e1f8f3977b",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/5713d41f-92a5-455c-b6fe-cefaf1699ab6/relationships/job_specification",
            related: "/api/job/5713d41f-92a5-455c-b6fe-cefaf1699ab6/job_specification"
          },
          data: {
            id: "edd789fc-075c-487a-b74b-c6fd12274002",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/5713d41f-92a5-455c-b6fe-cefaf1699ab6"
      }
    },
    {
      id: "9d8d9d8b-8d0e-4c5c-bb98-241034e0a1bc",
      type: "job",
      attributes: {
        title: "Updated python engineer",
        deadline: "2024-03-19T21:06:33",
        category: 4,
        vacancy: 2,
        created_at: "2023-04-19T05:12:19.991950+00:00",
        updated_at: "2023-05-04T10:52:03.788188+00:00",
        status: "L",
        version: 9
      },
      relationships: {
        job_description: {
          links: {
            self: "/api/job/9d8d9d8b-8d0e-4c5c-bb98-241034e0a1bc/relationships/job_description",
            related: "/api/job/9d8d9d8b-8d0e-4c5c-bb98-241034e0a1bc/job_description"
          },
          data: {
            id: "926e35e8-76f8-407b-9ab0-70815d826964",
            type: "job_description"
          }
        },
        job_specification: {
          links: {
            self: "/api/job/9d8d9d8b-8d0e-4c5c-bb98-241034e0a1bc/relationships/job_specification",
            related: "/api/job/9d8d9d8b-8d0e-4c5c-bb98-241034e0a1bc/job_specification"
          },
          data: {
            id: "5d88d59f-bc4b-41ae-b381-1858f55b7d19",
            type: "job_specification"
          }
        }
      },
      links: {
        self: "/api/jobs/9d8d9d8b-8d0e-4c5c-bb98-241034e0a1bc"
      }
    }
  ],
  included: [
    {
      type: "job_description",
      id: "023f50ea-3ec7-4c9a-9d2f-3f8faded5780",
      attributes: {
        details: "<p>asd</p>",
        office_address: "sdfs",
        company_benefit: "<p>sdfsdfsd</p>",
        salary: "100-1000",
        salary_type: 24,
        job_type: 116,
        employment_type: 117,
        experience_level: 108,
        office_time: 103
      }
    },
    {
      type: "job_specification",
      id: "fba57872-90ba-4ddf-a1c7-32eec807258d",
      attributes: {
        requirements: "<p>asdas</p>"
      }
    },
    {
      type: "skill",
      id: "b5b54384-a285-4b18-97f1-f4bc7bab3d12",
      attributes: {
        id: "68",
        name: "dsadwddddddddddddddddddddddddddddddddddd"
      }
    },
    {
      type: "skill",
      id: "7bcac1e6-50bf-43c0-b908-91852368bea6",
      attributes: {
        id: "67",
        name: "dasd"
      }
    },
    {
      type: "skill",
      id: "e091ddd1-d074-4c9c-9828-277230ec9525",
      attributes: {
        id: "64",
        name: "dddddddddddddddddddddddddddddddddddddddddddddd"
      }
    },
    {
      type: "skill",
      id: "4da4045a-6037-4c39-9848-1d92cbe1a1ba",
      attributes: {
        id: "65",
        name: "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
      }
    },
    {
      type: "skill",
      id: "c4b7aba0-0463-47a8-a12c-02182fccf95a",
      attributes: {
        id: "66",
        name: "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
      }
    },
    {
      type: "job_description",
      id: "5a102b85-e6a1-4ece-90c9-2eebef208eea",
      attributes: {
        details: "<p>job</p>",
        office_address: "77",
        company_benefit: "<p>6</p>",
        salary: "545666",
        salary_type: 24,
        job_type: 97,
        employment_type: 99,
        experience_level: 107,
        office_time: 88
      }
    },
    {
      type: "job_specification",
      id: "79318783-6f99-4ad8-a25e-168b058993e5",
      attributes: {
        requirements: "<p>jobbb</p>"
      }
    },
    {
      type: "skill",
      id: "bc8b02c5-2bb4-4918-b0de-e73e2dcf30b3",
      attributes: {
        id: "59",
        name: "newww"
      }
    },
    {
      type: "job_description",
      id: "edc33756-1464-4ba0-bfd6-c07d10fc5a7f",
      attributes: {
        details: "<p>testtt</p>",
        office_address: "ddd",
        company_benefit: "<p>sdfsd</p>",
        salary: "100-2000",
        salary_type: 23,
        job_type: 116,
        employment_type: 117,
        experience_level: 107,
        office_time: 103
      }
    },
    {
      type: "job_specification",
      id: "40c6dac9-6a72-4480-955f-2129186b547f",
      attributes: {
        requirements: "<p>testtt</p>"
      }
    },
    {
      type: "skill",
      id: "50165d56-9dcd-4412-b0b7-b9757dbd001e",
      attributes: {
        id: "60",
        name: "newwwe"
      }
    },
    {
      type: "skill",
      id: "7a27b2af-6833-42dd-a113-3903657ffcfb",
      attributes: {
        id: "58",
        name: "sdf"
      }
    },
    {
      type: "skill",
      id: "5a1e487e-327f-41fc-bdb5-1e735199d31f",
      attributes: {
        id: "61",
        name: "newskill"
      }
    },
    {
      type: "job_description",
      id: "037aa8f7-ef04-4b12-a8d6-01807c212f2e",
      attributes: {
        details: "<p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>",
        office_address: "\n\n",
        company_benefit: "<p><br></p><p><br></p>",
        salary: "1",
        salary_type: 23,
        job_type: 105,
        employment_type: 99,
        experience_level: 108,
        office_time: 88
      }
    },
    {
      type: "job_specification",
      id: "ef8c80b6-4754-466a-943f-554842d1fada",
      attributes: {
        requirements: "<p><br></p><p><br></p><p><br></p>"
      }
    },
    {
      type: "skill",
      id: "2395830b-e259-4bb9-ab65-a40e1c807351",
      attributes: {
        id: "57",
        name: "\\jhasgfddf"
      }
    },
    {
      type: "job_description",
      id: "1e723742-7c32-49b9-b9cd-5770eec0046a",
      attributes: {
        details: "<p>Test Job</p>",
        office_address: "Test Job",
        company_benefit: "<p>\uFEFFTest Job</p>",
        salary: "Test Job",
        salary_type: 22,
        job_type: 97,
        employment_type: 98,
        experience_level: 100,
        office_time: 103
      }
    },
    {
      type: "job_specification",
      id: "8c3120fe-5179-4ca5-8b7b-9ab57d5500a0",
      attributes: {
        requirements: "<p>Test Job</p>"
      }
    },
    {
      type: "skill",
      id: "88116734-9723-4da1-ac9f-23370ac9004d",
      attributes: {
        id: "53",
        name: "Test Job"
      }
    },
    {
      type: "job_description",
      id: "d21c768d-61f4-40bb-8b42-bdd4d3b43b39",
      attributes: {
        details: "<p>Test Job</p>",
        office_address: "Test Job",
        company_benefit: "<p>Test Job</p><p><br></p>",
        salary: "Test Job",
        salary_type: 22,
        job_type: 97,
        employment_type: 98,
        experience_level: 100,
        office_time: 88
      }
    },
    {
      type: "job_specification",
      id: "e4369fae-5f39-4275-8b0c-be7424c329c3",
      attributes: {
        requirements: "<p>Test Job</p>"
      }
    },
    {
      type: "job_description",
      id: "3e1cc248-6c93-4e0b-a759-aeec4146f479",
      attributes: {
        details: "<p>Test Job</p>",
        office_address: "Test Job",
        company_benefit: "<p>Test Job</p>",
        salary: "Test Job",
        salary_type: 22,
        job_type: 97,
        employment_type: 98,
        experience_level: 100,
        office_time: 88
      }
    },
    {
      type: "job_specification",
      id: "33d05402-7df5-4b4a-908e-22c132b47ed7",
      attributes: {
        requirements: "<p>Test Job</p>"
      }
    },
    {
      type: "job_description",
      id: "1e96eef3-b7bd-42b4-8854-c3b855262760",
      attributes: {
        details: "<p>9</p>",
        office_address: "zfcd",
        company_benefit: "<p>jj</p><p><br></p>",
        salary: "negotiable 1234",
        salary_type: 40,
        job_type: 97,
        employment_type: 99,
        experience_level: 47,
        office_time: 88
      }
    },
    {
      type: "job_specification",
      id: "0d1ad1fd-9194-4857-b350-ee114aa6bfd2",
      attributes: {
        requirements: "<p>9</p>"
      }
    },
    {
      type: "skill",
      id: "b9f8bb0e-6809-4a59-9bb6-97b287a94394",
      attributes: {
        id: "51",
        name: "newq"
      }
    },
    {
      type: "job_description",
      id: "3d589980-34d3-4ebf-acc1-bfaa38583cfe",
      attributes: {
        details: "<p>Test</p>",
        office_address: "Here",
        company_benefit: "<p>Company benefits</p>",
        salary: "Here",
        salary_type: 22,
        job_type: 71,
        employment_type: 80,
        experience_level: 82,
        office_time: 88
      }
    },
    {
      type: "job_specification",
      id: "e1b1035d-2ace-401d-a4d2-70922c459672",
      attributes: {
        requirements: "<p>TRe</p>"
      }
    },
    {
      type: "skill",
      id: "c1850d5d-6b0d-43cc-bf1e-f909d354a070",
      attributes: {
        id: "49",
        name: "Test 1"
      }
    },
    {
      type: "job_description",
      id: "7f64b532-b826-4c3e-b069-5a994273f3d7",
      attributes: {
        details: "<p>here</p>",
        office_address: "Here",
        company_benefit: "<p><br></p><p><br></p>",
        salary: "10000-10000",
        salary_type: 83,
        job_type: 84,
        employment_type: 81,
        experience_level: 82,
        office_time: 42
      }
    },
    {
      type: "job_specification",
      id: "a90210bd-df19-42f1-b88d-127bb15f5b41",
      attributes: {
        requirements: "<p>Here</p>"
      }
    },
    {
      type: "skill",
      id: "c9d101cf-4578-4a3e-bb47-ca4b4a49ea2f",
      attributes: {
        id: "50",
        name: "jsy"
      }
    },
    {
      type: "job_description",
      id: "0c6c3475-440d-4483-a981-47e851d0d769",
      attributes: {
        details: "<p>test</p>",
        office_address: "herer",
        company_benefit: "<p>test</p>",
        salary: "33",
        salary_type: 23,
        job_type: 8,
        employment_type: 28,
        experience_level: 46,
        office_time: 37
      }
    },
    {
      type: "job_specification",
      id: "dd7bea3f-64bc-4044-bde0-5587213900c2",
      attributes: {
        requirements: "<p>test</p>"
      }
    },
    {
      type: "job_description",
      id: "2de43aa3-5164-4f6d-bfd2-5a1419a68fdb",
      attributes: {
        details: "<p>tt</p>",
        office_address: "fff",
        company_benefit: "<p>-0-00-0</p>",
        salary: "ttt",
        salary_type: 25,
        job_type: 7,
        employment_type: 11,
        experience_level: 15,
        office_time: 19
      }
    },
    {
      type: "job_specification",
      id: "084cec33-0f9b-4847-9736-95614dba0578",
      attributes: {
        requirements: "<p>u</p>"
      }
    },
    {
      type: "job_description",
      id: "eb1305d2-4696-4e42-b4e8-702ec8d32f51",
      attributes: {
        details: "<p><strong><em>Mange project in js:</em></strong></p><ol><li><strong><em>this </em></strong></li><li><strong><em>thst</em></strong></li></ol>",
        office_address: "AHmed tower, Banani, Dhaka",
        company_benefit: "<p><strong><em>Mange project in js:</em></strong></p><ol><li><strong><em>this </em></strong></li><li><strong><em>thst</em></strong></li></ol>",
        salary: "10000",
        salary_type: 44,
        job_type: 6,
        employment_type: 12,
        experience_level: 15,
        office_time: 19
      }
    },
    {
      type: "job_specification",
      id: "2cf899b5-8f6f-4586-abf7-aca50c5b0eec",
      attributes: {
        requirements: "<p><strong><em>Mange project in js:</em></strong></p><ol><li><strong><em>this </em></strong></li><li><strong><em>thst</em></strong></li></ol>"
      }
    },
    {
      type: "skill",
      id: "f286aa33-91dd-45f4-980d-11c96f7021f7",
      attributes: {
        id: "48",
        name: "react"
      }
    },
    {
      type: "skill",
      id: "dffaaba4-dc87-46dd-b506-b78b71c2237b",
      attributes: {
        id: "47",
        name: "newtag2"
      }
    },
    {
      type: "skill",
      id: "ac2809a5-ec82-4e0d-8769-d75d3ab869fe",
      attributes: {
        id: "22",
        name: "js"
      }
    },
    {
      type: "job_description",
      id: "4fbfbdfe-565b-4190-9d4c-9d60c1d17d25",
      attributes: {
        details: "<p>asd</p>",
        office_address: "dsfds",
        company_benefit: "<p>dffd</p>",
        salary: "dfdf",
        salary_type: 23,
        job_type: 6,
        employment_type: 12,
        experience_level: 15,
        office_time: 19
      }
    },
    {
      type: "job_specification",
      id: "87e80613-48a1-443f-a38b-e41ca3ef7c03",
      attributes: {
        requirements: "<p>dffd</p>"
      }
    },
    {
      type: "skill",
      id: "8219f943-a6a2-4282-ab0f-07279063298a",
      attributes: {
        id: "43",
        name: "javascript"
      }
    },
    {
      type: "job_description",
      id: "c44a7e6e-6888-4928-9379-a3363cfcca09",
      attributes: {
        details: "<p>aaa</p>",
        office_address: "kk",
        company_benefit: "<p>ko</p>",
        salary: "25000",
        salary_type: 25,
        job_type: 7,
        employment_type: 11,
        experience_level: 15,
        office_time: 19
      }
    },
    {
      type: "job_specification",
      id: "b7e889a2-af69-4189-9738-93f900264f76",
      attributes: {
        requirements: "<p>aa</p>"
      }
    },
    {
      type: "job_description",
      id: "a990590a-f0a8-4a7e-a9c3-42feeb12119c",
      attributes: {
        details: "<p>k</p>",
        office_address: "iojojo",
        company_benefit: "<p>sdf</p>",
        salary: "Negotiable",
        salary_type: 25,
        job_type: 6,
        employment_type: 11,
        experience_level: 14,
        office_time: 18
      }
    },
    {
      type: "job_specification",
      id: "bcbdbc16-7c3a-45db-a469-36f32d9a8a86",
      attributes: {
        requirements: "<p>g</p>"
      }
    },
    {
      type: "skill",
      id: "aac454b1-8828-48dd-a2ff-2f9804cecdc0",
      attributes: {
        id: "42",
        name: "A tester with new learning skill"
      }
    },
    {
      type: "job_description",
      id: "28d71004-da27-46f8-9951-22a0435ecd11",
      attributes: {
        details: "<p>Job</p>",
        office_address: "Here",
        company_benefit: "<p>dsfdsfdsfsd</p>",
        salary: "1000k",
        salary_type: 25,
        job_type: 7,
        employment_type: 10,
        experience_level: 16,
        office_time: 18
      }
    },
    {
      type: "job_specification",
      id: "c678de4c-e6c2-4980-ba18-e6754731a652",
      attributes: {
        requirements: "<p>Job req</p>"
      }
    },
    {
      type: "skill",
      id: "72a4cab0-15b7-416c-bd64-7b51497d1808",
      attributes: {
        id: "41",
        name: "Skills"
      }
    },
    {
      type: "job_description",
      id: "7ed3ca09-8252-4975-a00e-714e663321fb",
      attributes: {
        details: "<p><br></p>",
        office_address: "dscsd",
        company_benefit: "<p><br></p>",
        salary: "negotiable",
        salary_type: 24,
        job_type: 6,
        employment_type: 11,
        experience_level: 15,
        office_time: 19
      }
    },
    {
      type: "job_specification",
      id: "54b57ff5-df2b-4693-a42f-fedaba14c316",
      attributes: {
        requirements: "<p><br></p>"
      }
    },
    {
      type: "skill",
      id: "625035e4-3c0e-48a2-98c4-87037ba88750",
      attributes: {
        id: "14",
        name: "min"
      }
    },
    {
      type: "job_description",
      id: "f136ca24-f89e-4879-9574-03ac66e4aefc",
      attributes: {
        details: "<p>212</p>",
        office_address: "1111",
        company_benefit: "<p>111</p>",
        salary: "kk",
        salary_type: 25,
        job_type: 6,
        employment_type: 10,
        experience_level: 15,
        office_time: 18
      }
    },
    {
      type: "job_specification",
      id: "c478866d-6cae-4d3a-a9dc-606f7dc41518",
      attributes: {
        requirements: "<p>212</p>"
      }
    },
    {
      type: "skill",
      id: "c3b192df-946f-4d72-91ae-7c1f2f410e3d",
      attributes: {
        id: "38",
        name: "hghghghghg jhjhjhjhjhj"
      }
    },
    {
      type: "job_description",
      id: "30a1607b-d6f8-4134-981b-7a5ea6fc902c",
      attributes: {
        details: "<p>We are looking for a QA Tester to assess software quality through manual and automated testing. You will be responsible for finding and reporting bugs and glitches.</p><p>In this role, you should have a keen eye for detail and excellent communication skills. If you are also competent in executing test cases and are passionate about quality, we\u2019d like to meet you.</p><p>Ultimately, you will ensure that our products, applications and systems work correctly.</p>",
        office_address: "28, Ahmed Tower, 30 Kemal Ataturk Ave, Dhaka 1213",
        company_benefit: '<ul><li>Review and analyze system specifications</li><li>Collaborate with&nbsp;<a href="https://resources.workable.com/qa-engineer-job-description" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 117, 106);">QA Engineers</a>&nbsp;to develop effective strategies and test plans</li><li>Execute test cases (manual or automated) and analyze results</li><li>Evaluate product code according to specifications</li><li>Create logs to document testing phases and defects</li><li>Report bugs and errors to development teams</li><li>Help troubleshoot issues</li><li>Conduct post-release/ post-implementation testing</li><li>Work with cross-functional teams to ensure quality throughout the software development lifecycle</li></ul>',
        salary: "30k-40k",
        salary_type: 25,
        job_type: 6,
        employment_type: 10,
        experience_level: 14,
        office_time: 18
      }
    },
    {
      type: "job_specification",
      id: "eb22fb00-5369-40ee-9d1d-ce3e36428905",
      attributes: {
        requirements: '<ul><li>Review and analyze system specifications</li><li>Collaborate with&nbsp;<a href="https://resources.workable.com/qa-engineer-job-description" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 117, 106);">QA Engineers</a>&nbsp;to develop effective strategies and test plans</li><li>Execute test cases (manual or automated) and analyze results</li><li>Evaluate product code according to specifications</li><li>Create logs to document testing phases and defects</li><li>Report bugs and errors to development teams</li><li>Help troubleshoot issues</li><li>Conduct post-release/ post-implementation testing</li><li>Work with cross-functional teams to ensure quality throughout the software development lifecycle</li></ul>'
      }
    },
    {
      type: "skill",
      id: "1c08e4b0-a4e9-4839-8b00-341f96d52c53",
      attributes: {
        id: "27",
        name: "talk good"
      }
    },
    {
      type: "skill",
      id: "f13dc068-16d0-4083-8eef-b41b3ed9b928",
      attributes: {
        id: "26",
        name: "talk"
      }
    },
    {
      type: "skill",
      id: "976f208e-e368-4933-9b40-0d706ba93a62",
      attributes: {
        id: "10",
        name: "tna"
      }
    },
    {
      type: "job_description",
      id: "3668c373-f48e-429d-9fe0-ff37bdf39245",
      attributes: {
        details: "<p>We are looking for a Lead Data Scientist to lead a technical team and help us gain useful insight out of raw data.</p><p>Lead Data Scientist responsibilities include managing the data science team, planning projects and building analytics models. You should have a strong problem-solving ability and a knack for statistical analysis. If you\u2019re also able to align our data products with our business goals, we\u2019d like to meet you.</p><p>Your ultimate goal will be to help improve our products and business decisions by making the most out of our data.</p>",
        office_address: "28, Ahmed Tower, 30 Kemal Ataturk Ave, Dhaka 1213",
        company_benefit: "<ul><li>Lead data mining and collection procedures</li><li>Ensure data quality and integrity</li><li>Interpret and analyze data problems</li><li>Conceive, plan and prioritize data projects</li><li>Build analytic systems and predictive models</li><li>Test performance of data-driven products</li><li>Visualize data and create reports</li><li>Experiment with new models and techniques</li><li>Align data projects with organizational goals</li></ul>",
        salary: "40k-60k",
        salary_type: 25,
        job_type: 6,
        employment_type: 10,
        experience_level: 15,
        office_time: 18
      }
    },
    {
      type: "job_specification",
      id: "06193a6f-a7bd-4996-a27d-057029864a16",
      attributes: {
        requirements: "<ul><li>Proven experience as a Data Scientist or similar role</li><li>Solid understanding of machine learning</li><li>Knowledge of data management and visualization techniques</li><li>A knack for statistical analysis and predictive modeling</li><li>Good knowledge of R, Python and MATLAB</li><li>Experience with SQL and NoSQL databases</li><li>Strong organizational and leadership skills</li><li>Excellent communication skills</li><li>A business mindset</li><li>Degree in Computer Science, Data Science, Mathematics or similar field</li></ul>"
      }
    },
    {
      type: "skill",
      id: "e18fb3bd-ada8-4fd2-b367-f0c6ea0e8dea",
      attributes: {
        id: "4",
        name: "test1"
      }
    },
    {
      type: "job_description",
      id: "86492fcc-c8d1-44f1-b8a2-4dbeddfdf188",
      attributes: {
        details: "<p>We are looking for a Python Developer to join our engineering team and help us develop and maintain various software products.</p><p>Python Developer responsibilities include writing and testing code, debugging programs and integrating applications with third-party web services. To be successful in this role, you should have experience using server-side logic and work well in a team.</p><p>Ultimately, you\u2019ll build highly responsive web applications that align with our business needs.</p>",
        office_address: "28, Ahmed Tower, 30 Kemal Ataturk Ave, Dhaka 1213",
        company_benefit: "<p>mplement security and data protection solutions</p><p>Assess and prioritize feature requests</p><p>Coordinate with internal teams to understand user requirements and provide technical solutions</p>",
        salary: "30k - 40k",
        salary_type: 25,
        job_type: 8,
        employment_type: 10,
        experience_level: 15,
        office_time: 18
      }
    },
    {
      type: "job_specification",
      id: "0b300e76-9138-4ff6-85d8-8c14468e6eaa",
      attributes: {
        requirements: "<ul><li>Work experience as a Python Developer</li><li>Expertise in at least one popular Python framework (like Django, Flask or Pyramid)</li><li>Knowledge of object-relational mapping (ORM)</li><li>Familiarity with front-end technologies (like JavaScript and HTML5)</li><li>Team spirit</li><li>Good problem-solving skills</li><li>BSc in Computer Science, Engineering or relevant field</li></ul>"
      }
    },
    {
      type: "skill",
      id: "8adbfe84-f4e7-475f-a5c2-93461b0c00de",
      attributes: {
        id: "5",
        name: "test2"
      }
    },
    {
      type: "job_description",
      id: "12df26ca-b4bd-4b34-8692-f1461ec3fea9",
      attributes: {
        details: "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
        office_address: "Dhaka",
        company_benefit: "<p>test</p>",
        salary: "56k-90k",
        salary_type: 25,
        job_type: 6,
        employment_type: 10,
        experience_level: 15,
        office_time: 18
      }
    },
    {
      type: "job_specification",
      id: "b9a5e447-179f-4a80-9cc5-fdbec55a269e",
      attributes: {
        requirements: "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
      }
    },
    {
      type: "job_description",
      id: "a0ed4c5e-bb2a-4664-af0e-81f6049b1713",
      attributes: {
        details: "<p>ABC</p>",
        office_address: "ABC",
        company_benefit: "<p>ABC</p>",
        salary: "ABC",
        salary_type: 23,
        job_type: 7,
        employment_type: 10,
        experience_level: 15,
        office_time: 19
      }
    },
    {
      type: "job_specification",
      id: "3e8ab158-6d48-42ad-a779-c2f502686867",
      attributes: {
        requirements: "<p>ABC</p>"
      }
    },
    {
      type: "skill",
      id: "16a37756-1e11-4df4-b70e-8893febfe0b8",
      attributes: {
        id: "1",
        name: "cpp"
      }
    },
    {
      type: "skill",
      id: "3a4754a3-b742-41d5-80f4-ccf694e22b3b",
      attributes: {
        id: "3",
        name: "git"
      }
    },
    {
      type: "job_description",
      id: "a862ca7c-0638-4e3a-871f-a01b08dda7b8",
      attributes: {
        details: "<p><br></p>",
        office_address: "28, Ahmed Tower, 30 Kemal Ataturk Ave, Dhaka 1213",
        company_benefit: "<p><br></p>",
        salary: "12434324",
        salary_type: 24,
        job_type: 7,
        employment_type: 11,
        experience_level: 14,
        office_time: 19
      }
    },
    {
      type: "job_specification",
      id: "f37a8a9f-52c2-4bc6-89bc-6d0ac76c4946",
      attributes: {
        requirements: "<p><br></p>"
      }
    },
    {
      type: "skill",
      id: "1754e8c1-2425-401e-8820-af638e621bd2",
      attributes: {
        id: "20",
        name: "mi3"
      }
    },
    {
      type: "skill",
      id: "6a433c73-e43d-4d2d-aa40-7bf914af3798",
      attributes: {
        id: "19",
        name: "MI$"
      }
    },
    {
      type: "skill",
      id: "29473444-14d4-4035-b9fc-1c96f547718a",
      attributes: {
        id: "18",
        name: "Mi1"
      }
    },
    {
      type: "job_description",
      id: "d34a3087-38e1-4249-bcd6-5f61b4a616d7",
      attributes: {
        details: "<p>We are looking for a Full Stack Developer to produce scalable software solutions. You\u2019ll be part of a cross-functional team that\u2019s responsible for the full software development life cycle, from conception to deployment.</p><p>As a Full Stack Developer, you should be comfortable around both front-end and back-end coding languages, development frameworks and third-party libraries. You should also be a team player with a knack for visual design and utility.</p><p>If you\u2019re also familiar with Agile methodologies, we\u2019d like to meet you.</p>",
        office_address: "28, Ahmed Tower, 30 Kemal Ataturk Ave, Dhaka 1213",
        company_benefit: "<p>rite effective APIs</p><p>Test software to ensure responsiveness and efficiency</p><p>Troubleshoot, debug and upgrade software</p><p>Create security and data protection settings</p><p>Build features and</p>",
        salary: "Negotiable",
        salary_type: 22,
        job_type: 8,
        employment_type: 10,
        experience_level: 14,
        office_time: 18
      }
    },
    {
      type: "job_specification",
      id: "40d4a466-89a2-49d6-bbda-1b8371e0773a",
      attributes: {
        requirements: "<ul><li>Proven experience as a Full Stack Developer or similar role</li><li>Experience developing desktop and mobile applications</li><li>Familiarity with common stacks</li><li>Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, XML, jQuery)</li><li>Knowledge of multiple back-end languages (e.g. C#, Java, Python) and JavaScript frameworks (e.g. Angular, React, Node.js)</li><li>Familiarity with databases (e.g. MySQL, MongoDB), web servers (e.g. Apache) and UI/UX design</li><li>Excellent communication and teamwork skills</li><li>Great attention to detail</li><li>Organizational skills</li><li>An analytical mind</li><li>Degree in Computer Science, Statistics or relevant field</li></ul>"
      }
    },
    {
      type: "skill",
      id: "de85c2ce-6432-4dc8-9cda-bebf05f146a2",
      attributes: {
        id: "2",
        name: "python"
      }
    },
    {
      type: "job_description",
      id: "94f36f6b-4383-472c-881a-039703426a10",
      attributes: {
        details: "<p><br></p>",
        office_address: "28, Ahmed Tower, 30 Kemal Ataturk Ave, Dhaka 1213",
        company_benefit: "<p><br></p>",
        salary: "Negotiable",
        salary_type: 25,
        job_type: 8,
        employment_type: 10,
        experience_level: 15,
        office_time: 18
      }
    },
    {
      type: "job_specification",
      id: "cfc18776-3eed-443d-997e-4189c9caf544",
      attributes: {
        requirements: "<p><br></p>"
      }
    },
    {
      type: "job_description",
      id: "3c3525dd-7a16-4d91-9b9a-86120f25b002",
      attributes: {
        details: "<p>We are looking for an Android Engineer to design, develop, and maintain Android mobile applications.</p><p>You will be responsible for ensuring the performance, reliability, and functionality of the applications on a range of devices and operating systems. You will also collaborate with cross-functional teams to define, design, and ship new features.</p><p>You should have extensive experience with Android development and a strong understanding of the Android ecosystem.</p>",
        office_address: "28, Ahmed Tower, 30 Kemal Ataturk Ave, Dhaka 1213",
        company_benefit: "<ul><li>Design, develop, and maintain Android mobile applications.</li><li>Ensure the performance, reliability, and functionality of the applications on a range of devices and operating systems.</li><li>Collaborate with cross-functional teams to define, design, and ship new features.</li><li>Write clean, maintainable, and efficient code.</li><li>Debug and troubleshoot issues in the applications.</li><li>Stay up-to-date with the latest developments and trends in the Android ecosystem.</li></ul>",
        salary: "Negotiable",
        salary_type: 25,
        job_type: 8,
        employment_type: 10,
        experience_level: 14,
        office_time: 18
      }
    },
    {
      type: "job_specification",
      id: "ab110c7d-ec34-411b-bb2e-66989cfc02dc",
      attributes: {
        requirements: "<ul><li>Extensive experience with Android development and a strong understanding of the Android ecosystem.</li><li>Proficiency in Java and the Android SDK.</li><li>Experience with Android libraries, frameworks, and patterns.</li><li>Knowledge of software design principles and best practices.</li><li>Familiarity with RESTful APIs and JSON.</li><li>Experience with agile development methodologies.</li><li>Strong problem-solving and critical thinking skills.</li><li>Excellent communication and collaboration skills.</li><li>Attention to detail and a commitment to quality.</li><li>Ability to work independently and as part of a team.</li><li>Bachelor\u2019s degree in Computer Science or a related field (preferred)</li></ul>"
      }
    },
    {
      type: "skill",
      id: "23c77054-7028-427c-8af1-3747c439d671",
      attributes: {
        id: "6",
        name: "new test 1"
      }
    },
    {
      type: "skill",
      id: "9be60c45-944f-4f25-80b2-c7aabfcd29e1",
      attributes: {
        id: "7",
        name: "new test 2"
      }
    },
    {
      type: "job_description",
      id: "03d94ea5-6aec-4cbe-a77c-c87cc2ed3a04",
      attributes: {
        details: "<p>Details</p>",
        office_address: "Here",
        company_benefit: "<p>Benefits</p>",
        salary: "1000",
        salary_type: 25,
        job_type: 7,
        employment_type: 11,
        experience_level: 15,
        office_time: 19
      }
    },
    {
      type: "job_specification",
      id: "9dcc0324-d981-486a-b7c7-dfc3c4109f7b",
      attributes: {
        requirements: "<p>Requirements</p><p>Some more requirements</p>"
      }
    },
    {
      type: "job_description",
      id: "0bd99e2d-3a34-4227-8b3f-f15b49d2cd46",
      attributes: {
        details: "<p>This is the final test to know if there is a bug in preview and save</p>",
        office_address: "Here",
        company_benefit: "<p>Test</p>",
        salary: "10000",
        salary_type: 24,
        job_type: 7,
        employment_type: 11,
        experience_level: 16,
        office_time: 19
      }
    },
    {
      type: "job_specification",
      id: "ed862921-8be1-4245-b484-7aea129d9ddd",
      attributes: {
        requirements: "<p>Preview save test</p>"
      }
    },
    {
      type: "job_description",
      id: "53959587-51e4-4cab-9436-7e5e8762eb4d",
      attributes: {
        details: "<p>a good test</p>",
        office_address: "Here",
        company_benefit: "<p>This is a good test</p>",
        salary: "1000",
        salary_type: 24,
        job_type: 7,
        employment_type: 12,
        experience_level: 15,
        office_time: 19
      }
    },
    {
      type: "job_specification",
      id: "f8d202f5-84e0-44aa-9b23-68fa126f96cb",
      attributes: {
        requirements: "<p>This is a test for preview	</p>"
      }
    },
    {
      type: "job_description",
      id: "9669e5e0-2225-4d9c-b03e-f5084ff0ead2",
      attributes: {
        details: "<p>This	</p>",
        office_address: "Here",
        company_benefit: "<p>Here is that</p>",
        salary: "10000",
        salary_type: 25,
        job_type: 8,
        employment_type: 11,
        experience_level: 15,
        office_time: 19
      }
    },
    {
      type: "job_specification",
      id: "246e9a2e-69b0-4855-b865-4a3d78aa7e90",
      attributes: {
        requirements: "<p>Those requirements</p>"
      }
    },
    {
      type: "job_description",
      id: "99edc99f-b492-4a0d-94f5-0dbfdfee9707",
      attributes: {
        details: "<p>thists</p>",
        office_address: "here",
        company_benefit: "<p>that</p>",
        salary: "100000",
        salary_type: 24,
        job_type: 7,
        employment_type: 28,
        experience_level: 15,
        office_time: 20
      }
    },
    {
      type: "job_specification",
      id: "e94f06fa-e6a5-4296-9155-dd15f0802120",
      attributes: {
        requirements: "<ul><li>rtst</li><li>sd</li><li>tjat</li><li>sdf</li></ul>"
      }
    },
    {
      type: "job_description",
      id: "ab043991-0caf-4e3f-b60f-9a684438d2c5",
      attributes: {
        details: "<p>that</p>",
        office_address: "here",
        company_benefit: "<p>benefit</p>",
        salary: "100000",
        salary_type: 25,
        job_type: 8,
        employment_type: 11,
        experience_level: 15,
        office_time: 19
      }
    },
    {
      type: "job_specification",
      id: "a25adcf0-5f81-46c2-ba7e-7aba4d6a7eed",
      attributes: {
        requirements: "<p>this</p>"
      }
    },
    {
      type: "job_description",
      id: "32b66067-e0ca-4862-a10b-222c66419302",
      attributes: {
        details: "<p>Looking for a USB type programmer</p>",
        office_address: "Dhaka, Bangladesh",
        company_benefit: "<p>normal</p>",
        salary: "100",
        salary_type: 25,
        job_type: 6,
        employment_type: 12,
        experience_level: 15,
        office_time: 18
      }
    },
    {
      type: "job_specification",
      id: "1830f83b-64dd-48c5-b34e-1578e7db601d",
      attributes: {
        requirements: "<p>Will to look around what others doing, understand and pick a good one.</p>"
      }
    },
    {
      type: "job_description",
      id: "11bfdba1-79d5-4336-b456-623a3b5a00a4",
      attributes: {
        details: "<ul><li>JS frameworks</li><li>NExt</li><li>React</li><li>Make wep apps</li></ul>",
        office_address: "Here",
        company_benefit: "<ul><li>Lunch</li><li>Snacks</li><li>and stuff</li></ul>",
        salary: "100000",
        salary_type: 25,
        job_type: 6,
        employment_type: 11,
        experience_level: 108,
        office_time: 19
      }
    },
    {
      type: "job_specification",
      id: "a254e3c6-0e0e-4583-ad55-b710138f9a3a",
      attributes: {
        requirements: "<p>Undestanding of :</p><ol><li>React</li><li>Js core</li><li>Node js</li><li>next</li><li>Css frameworks</li></ol>"
      }
    },
    {
      type: "skill",
      id: "ee66a1b0-7049-4086-9769-8da4c650d9a2",
      attributes: {
        id: "56",
        name: "ne"
      }
    },
    {
      type: "skill",
      id: "de2b7ef9-470b-41cb-a8ba-08b4a095c20c",
      attributes: {
        id: "55",
        name: "neww"
      }
    },
    {
      type: "job_description",
      id: "57e4dc07-c6af-4ac2-8357-4a0e1fbc17fc",
      attributes: {
        details: "<ul><li>Participating in the design and creation of scalable software</li><li>Writing clean, functional code on the front- and back-end</li><li>Testing and fixing bugs or other coding issues</li></ul>",
        office_address: "28, Ahmed Tower, 30 Kemal Ataturk Ave, Dhaka 1213",
        company_benefit: "<ul><li>Health Benefits.</li><li>Retirement.</li><li>Workplace Flexibility.</li><li>Wellness Program.</li><li>Tuition Reimbursement.</li></ul><p><br></p>",
        salary: "30000-70000",
        salary_type: 25,
        job_type: 8,
        employment_type: 10,
        experience_level: 14,
        office_time: 18
      }
    },
    {
      type: "job_specification",
      id: "8c45d837-837e-419e-bbe4-6f0b3d67c764",
      attributes: {
        requirements: "<ul><li>Proven experience as a Full Stack Developer or similar role</li><li>Experience developing desktop and mobile applications</li><li>Familiarity with common stacks</li><li>Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, XML, jQuery)</li><li>Knowledge of multiple back-end languages (e.g. C#, Java, Python) and JavaScript frameworks (e.g. Angular, React, Node.js)</li><li>Familiarity with databases (e.g. MySQL, MongoDB), web servers (e.g. Apache) and UI/UX design</li><li>Excellent communication and teamwork skills</li><li>Great attention to detail</li><li>Organizational skills</li><li>An analytical mind</li><li>Degree in Computer Science, Statistics or relevant field</li></ul>"
      }
    },
    {
      type: "job_description",
      id: "b4bf3991-886f-4afd-b7d6-66e1f8f3977b",
      attributes: {
        details: "<p>test</p>",
        office_address: "test",
        company_benefit: "<p>test</p>",
        salary: "60k-70k",
        salary_type: 25,
        job_type: 6,
        employment_type: 10,
        experience_level: 15,
        office_time: 18
      }
    },
    {
      type: "job_specification",
      id: "edd789fc-075c-487a-b74b-c6fd12274002",
      attributes: {
        requirements: "<p>test</p>"
      }
    },
    {
      type: "job_description",
      id: "926e35e8-76f8-407b-9ab0-70815d826964",
      attributes: {
        details: "<p>i am dancing</p>",
        office_address: "609 Banani",
        company_benefit: "<p>Lunch, snacks</p>",
        salary: "20000",
        salary_type: 22,
        job_type: 6,
        employment_type: 10,
        experience_level: 107,
        office_time: 19
      }
    },
    {
      type: "job_specification",
      id: "5d88d59f-bc4b-41ae-b381-1858f55b7d19",
      attributes: {
        requirements: "<p>datavase</p>"
      }
    }
  ],
  links: {
    self: "/api/jobs"
  }
};

// src/index.ts
var jsonApi = new JsonApi();
jsonApi.deserialize(mockdata);
