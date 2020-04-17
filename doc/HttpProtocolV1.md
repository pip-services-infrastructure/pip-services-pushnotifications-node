# HTTP Protocol (version 1) <br/> PushNotifications Microservice

PushNotifications microservice implements a HTTP compatible API, that can be accessed on configured port.
All input and output data is serialized in JSON format. Errors are returned in [standard format]().

* [POST /notification/get_section_ids](#operation1)
* [POST /notification/get_sections](#operation2)
* [POST /notification/get_section_by_id](#operation3)
* [POST /notification/set_section](#operation4)
* [POST /notification/modify_section](#operation5)

## Operations

### <a name="operation1"></a> Method: 'POST', route '/notification/get\_section\_ids'

Retrieves notification section ids filtered by set of criteria.

**Request body:** 
- correlation_id: string - (optional) unique id that identifies distributed transaction
- filter: Object
  - id: string - (optional) unique section id
  - id_starts: string - (optional) starting id substring
  - search: string - (optional) search by id substring
- paging: Object
  - skip: int - (optional) start of page (default: 0). Operation returns paged result
  - take: int - (optional) page length (max: 100). Operation returns paged result

**Response body:**
Data page with notification ids

### <a name="operation2"></a> Method: 'POST', route '/notification/get_sections'

Retrieves notification sections filtered by set of criteria.

**Request body:** 
- correlation_id: string - (optional) unique id that identifies distributed transaction
- filter: Object
  - id: string - (optional) unique section id
  - id_starts: string - (optional) starting id substring
  - search: string - (optional) search by id substring
- paging: Object
  - skip: int - (optional) start of page (default: 0). Operation returns paged result
  - take: int - (optional) page length (max: 100). Operation returns paged result

**Response body:**
Data page with notification sections

### <a name="operation3"></a> Method: 'POST', route '/notification/get\_section\_by_id'

Gets notification section by its unique id

**Request body:**
- id: string - unique section id

**Response body:**
Section parameters

### <a name="operation4"></a> Method: 'POST', route '/notification/set_section'

Sets notification section by its unique ud

**Request body:**
- id: string - unique section id
- parameters: object - new section parameters

**Response body:**
Updated section parameters

### <a name="operation5"></a> Method: 'POST', route '/notification/modify_section'

Modify notification section, perform partial updates and increments

**Request body:**
- id: string - unique section id
- update_parameters: object - section parameters for partial updates
- increment_parameters: object - section parameters for increments

**Response body:**
Updated section parameters

