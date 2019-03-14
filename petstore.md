# Swagger Petstore
<p class="version">version: 1.0.0</p>
<p class="server">Servers:</p>

- `http://petstore.swagger.io/api`

	

A sample API that uses a petstore as an example to demonstrate features in the OpenAPI 3.0 specification

## GET /pets {#findPets}
Returns all pets from the system that the user has access to
Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.

Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien.


### Request parameters
| Name | Type | Description | Required |
|----|----|-----------|-----|
| `tags`<br/>(query) | array  of string | tags to filter by |  |
| `limit`<br/>(query) | integer  | maximum number of results to return |  |



### Responses
<table><thead><th>Code</th><th>Description</th></thead><tbody>
<tr>
<td>200</td>
<td><p>pet response</p>


- Schema: array of 







<pre><code>{
   "name": {
      "type": "string"
   },
   "tag": {
      "type": "string"
   }
}</code></pre>








<pre><code>{
   "id": {
      "type": "integer",
      "format": "int64"
   }
}</code></pre>
















</td>
</tr><tr>
<td>default</td>
<td><p>unexpected error</p>


- Schema: 


<pre><code>{
   "code": {
      "type": "integer",
      "format": "int32"
   },
   "message": {
      "type": "string"
   }
}</code></pre>














</td>
</tr></tbody></table>



## POST /pets {#addPet}
Creates a new pet in the store.  Duplicates are allowed

### Request parameters
None


### Responses
<table><thead><th>Code</th><th>Description</th></thead><tbody>
<tr>
<td>200</td>
<td><p>pet response</p>


- Schema: 







<pre><code>{
   "name": {
      "type": "string"
   },
   "tag": {
      "type": "string"
   }
}</code></pre>








<pre><code>{
   "id": {
      "type": "integer",
      "format": "int64"
   }
}</code></pre>













</td>
</tr><tr>
<td>default</td>
<td><p>unexpected error</p>


- Schema: 


<pre><code>{
   "code": {
      "type": "integer",
      "format": "int32"
   },
   "message": {
      "type": "string"
   }
}</code></pre>














</td>
</tr></tbody></table>




## GET /pets/\{id\} {#find pet by id}
Returns a user based on a single ID, if the user does not have access to the pet

### Request parameters
| Name | Type | Description | Required |
|----|----|-----------|-----|
| `id`<br/>(path) | integer  | ID of pet to fetch | O |



### Responses
<table><thead><th>Code</th><th>Description</th></thead><tbody>
<tr>
<td>200</td>
<td><p>pet response</p>


- Schema: 







<pre><code>{
   "name": {
      "type": "string"
   },
   "tag": {
      "type": "string"
   }
}</code></pre>








<pre><code>{
   "id": {
      "type": "integer",
      "format": "int64"
   }
}</code></pre>













</td>
</tr><tr>
<td>default</td>
<td><p>unexpected error</p>


- Schema: 


<pre><code>{
   "code": {
      "type": "integer",
      "format": "int32"
   },
   "message": {
      "type": "string"
   }
}</code></pre>














</td>
</tr></tbody></table>



## DELETE /pets/\{id\} {#deletePet}
deletes a single pet based on the ID supplied

### Request parameters
| Name | Type | Description | Required |
|----|----|-----------|-----|
| `id`<br/>(path) | integer  | ID of pet to delete | O |



### Responses
<table><thead><th>Code</th><th>Description</th></thead><tbody>
<tr>
<td>204</td>
<td><p>pet deleted</p>

</td>
</tr><tr>
<td>default</td>
<td><p>unexpected error</p>


- Schema: 


<pre><code>{
   "code": {
      "type": "integer",
      "format": "int32"
   },
   "message": {
      "type": "string"
   }
}</code></pre>














</td>
</tr></tbody></table>




