# Seneca Protocol (version 1) <br/> PushNotifications Microservice

PushNotifications microservice implements a Seneca compatible API. 
Seneca port and protocol can be specified in the microservice [configuration](Configuration.md/#api_seneca). 

```javascript
var seneca = require('seneca')();

seneca.client({
    type: 'tcp', // Microservice seneca protocol
    localhost: 'localhost', // Microservice localhost
    port: 8804, // Microservice seneca port
});
```

The microservice responds on the following requests:

```javascript
seneca.act(
    {
        role: 'push_notifications',
        version: 1,
        cmd: ...cmd name....
        ... Arguments ...
    },
    function (err, result) {
        ...
    }
);
```

* [cmd: 'get_section_ids'](#operation1)
* [cmd: 'get_sections'](#operation2)
* [cmd: 'get_section_by_id'](#operation3)
* [cmd: 'set_section'](#operation4)
* [cmd: 'modify_section'](#operation5)

## Operations

### <a name="operation1"></a> Cmd: 'get\_section\_ids'

Retrieves notification section ids filtered by set of criteria.

**Arguments:** 
- correlation_id: string - (optional) unique id that identifies distributed transaction
- filter: Object
  - id: string - (optional) unique section id
  - id_starts: string - (optional) starting id substring
  - search: string - (optional) search by id substring
- paging: Object
  - skip: int - (optional) start of page (default: 0). Operation returns paged result
  - take: int - (optional) page length (max: 100). Operation returns paged result

**Returns:**
- err: Error - occured error or null for success
- result: DataPage<string> - page with retrieved notification section ids

### <a name="operation2"></a> Cmd: 'get_sections'

Retrieves notification sections filtered by set of criteria.

**Arguments:** 
- correlation_id: string - (optional) unique id that identifies distributed transaction
- filter: Object
  - id: string - (optional) unique section id
  - id_starts: string - (optional) starting id substring
  - search: string - (optional) search by id substring
- paging: Object
  - skip: int - (optional) start of page (default: 0). Operation returns paged result
  - take: int - (optional) page length (max: 100). Operation returns paged result

**Returns:**
- err: Error - occured error or null for success
- result: DataPage<NotificationV1> - page with retrieved notification sections

### <a name="operation3"></a> Cmd: 'get\_section\_by_id'

Gets notification section by its unique id

**Arguments:** 
- correlation_id: string - (optional) unique id that identifies distributed transaction
- id: string - unique section id

**Returns:**
- err: Error - occured error or null for success
- result: Object - section parameters

### <a name="operation4"></a> Cmd: 'set\_section'

Sets notification section parameters by its unique id

**Arguments:** 
- correlation_id: string - (optional) unique id that identifies distributed transaction
- id: string - unique section id
- parameters: Object - section parameters

**Returns:**
- err: Error - occured error or null for success
- result: Object - updated section parameters

### <a name="operation5"></a> Cmd: 'modify_section'

Modify notification section, perform partial updates and increments

**Arguments:** 
- correlation_id: string - (optional) unique id that identifies distributed transaction
- id: string - unique section id
- update_parameters: object - section parameters for partial updates
- increment_parameters: object - section parameters for increments

**Returns:**
- err: Error - occured error or null for success
- result: Object - updated section parameters
