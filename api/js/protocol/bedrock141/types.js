/*
 * This file was automatically generated by sel-utils and
 * released under the MIT License.
 * 
 * License: https://github.com/sel-project/sel-utils/blob/master/LICENSE
 * Repository: https://github.com/sel-project/sel-utils
 * Generated from https://github.com/sel-project/sel-utils/blob/master/xml/protocol/bedrock141.xml
 */
/** @module sul/protocol/bedrock141/types */

const Types = {

	LoginBody: class extends Buffer {

		constructor(chain=null, clientData=null) {
			super();
			this.chain = chain;
			this.clientData = clientData;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeLittleEndianInt(this.chain.length); this.writeBytes(this.chain);
			this.writeLittleEndianInt(this.clientData.length); this.writeBytes(this.clientData);
			var _length = this._buffer.length;
			this.writeVaruint(_length);
			var _length_array = [];
			while(this._buffer.length > _length) _length_array.push(this._buffer.pop());
			while(_length_array.length > 0) this._buffer.unshift(_length_array.shift());
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _length=this.readVaruint();
			_buffer = this._buffer.slice(_length);
			if(this._buffer.length > _length) this._buffer.length = _length;
			var aramyha4=this.readLittleEndianInt(); this.chain=this.readBytes(aramyha4);
			var aramyxz5=this.readLittleEndianInt(); this.clientData=this.readBytes(aramyxz5);
			this._buffer = _buffer;
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.LoginBody().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "LoginBody(chain: " + this.chain + ", clientData: " + this.clientData + ")";
		}

	},

	PackWithSize: class extends Buffer {

		constructor(id="", version="", size=0) {
			super();
			this.id = id;
			this.version = version;
			this.size = size;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			var dhc5z=this.encodeString(this.id); this.writeVaruint(dhc5z.length); this.writeBytes(dhc5z);
			var dhc5zja9=this.encodeString(this.version); this.writeVaruint(dhc5zja9.length); this.writeBytes(dhc5zja9);
			this.writeLittleEndianLong(this.size);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.id=this.decodeString(this.readBytes(this.readVaruint()));
			this.version=this.decodeString(this.readBytes(this.readVaruint()));
			this.size=this.readLittleEndianLong();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.PackWithSize().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "PackWithSize(id: " + this.id + ", version: " + this.version + ", size: " + this.size + ")";
		}

	},

	Pack: class extends Buffer {

		constructor(id="", version="") {
			super();
			this.id = id;
			this.version = version;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			var dhc5z=this.encodeString(this.id); this.writeVaruint(dhc5z.length); this.writeBytes(dhc5z);
			var dhc5zja9=this.encodeString(this.version); this.writeVaruint(dhc5zja9.length); this.writeBytes(dhc5zja9);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.id=this.decodeString(this.readBytes(this.readVaruint()));
			this.version=this.decodeString(this.readBytes(this.readVaruint()));
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Pack().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Pack(id: " + this.id + ", version: " + this.version + ")";
		}

	},

	Slot: class extends Buffer {

		/**
		 * @param id
		 *        Item's id or 0 if the slot is empty.
		 * @param metaAndCount
		 *        Item's meta or uses (unsigned short) left-shifted 8 times and the count (unisgned byte).
		 *        Examples:
		 * @param nbt
		 *        Optional nbt data encoded as a nameless little-endian compound tag.
		 */
		constructor(id=0, metaAndCount=0, nbt=null, canPlaceOn=[], canDestroy=[]) {
			super();
			this.id = id;
			this.metaAndCount = metaAndCount;
			this.nbt = nbt;
			this.canPlaceOn = canPlaceOn;
			this.canDestroy = canDestroy;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVarint(this.id);
			if(id>0){ this.writeVarint(this.metaAndCount); }
			if(id>0){ this.writeLittleEndianShort(this.nbt.length); this.writeBytes(this.nbt); }
			this.writeVaruint(this.canPlaceOn.length); for(var dhc5y5bf in this.canPlaceOn){ var dhc5y5bf=this.encodeString(this.canPlaceOn[dhc5y5bf]); this.writeVaruint(dhc5y5bf.length); this.writeBytes(dhc5y5bf); }
			this.writeVaruint(this.canDestroy.length); for(var dhc5y5zn in this.canDestroy){ var dhc5y5zn=this.encodeString(this.canDestroy[dhc5y5zn]); this.writeVaruint(dhc5y5zn.length); this.writeBytes(dhc5y5zn); }
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.id=this.readVarint();
			if(id>0){ this.metaAndCount=this.readVarint(); }
			if(id>0){ var arambj=this.readLittleEndianShort(); this.nbt=this.readBytes(arambj); }
			var aramyfux=this.readVaruint(); this.canPlaceOn=[]; for(var dhc5y5bf=0;dhc5y5bf<aramyfux;dhc5y5bf++){ this.canPlaceOn[dhc5y5bf]=this.decodeString(this.readBytes(this.readVaruint())); }
			var aramyfrv=this.readVaruint(); this.canDestroy=[]; for(var dhc5y5zn=0;dhc5y5zn<aramyfrv;dhc5y5zn++){ this.canDestroy[dhc5y5zn]=this.decodeString(this.readBytes(this.readVaruint())); }
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Slot().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Slot(id: " + this.id + ", metaAndCount: " + this.metaAndCount + ", nbt: " + this.nbt + ", canPlaceOn: " + this.canPlaceOn + ", canDestroy: " + this.canDestroy + ")";
		}

	},

	Attribute: class extends Buffer {

		constructor(min=.0, max=.0, value=.0, def=.0, name="") {
			super();
			this.min = min;
			this.max = max;
			this.value = value;
			this.def = def;
			this.name = name;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeLittleEndianFloat(this.min);
			this.writeLittleEndianFloat(this.max);
			this.writeLittleEndianFloat(this.value);
			this.writeLittleEndianFloat(this.def);
			var dhc5y1=this.encodeString(this.name); this.writeVaruint(dhc5y1.length); this.writeBytes(dhc5y1);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.min=this.readLittleEndianFloat();
			this.max=this.readLittleEndianFloat();
			this.value=this.readLittleEndianFloat();
			this.def=this.readLittleEndianFloat();
			this.name=this.decodeString(this.readBytes(this.readVaruint()));
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Attribute().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Attribute(min: " + this.min + ", max: " + this.max + ", value: " + this.value + ", def: " + this.def + ", name: " + this.name + ")";
		}

	},

	BlockPosition: class extends Buffer {

		constructor(x=0, y=0, z=0) {
			super();
			this.x = x;
			this.y = y;
			this.z = z;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVarint(this.x);
			this.writeVaruint(this.y);
			this.writeVarint(this.z);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.x=this.readVarint();
			this.y=this.readVaruint();
			this.z=this.readVarint();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.BlockPosition().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "BlockPosition(x: " + this.x + ", y: " + this.y + ", z: " + this.z + ")";
		}

	},

	McpeUuid: class extends Buffer {

		constructor(mostSignificantBits=0, leastSignificantBits=0) {
			super();
			this.mostSignificantBits = mostSignificantBits;
			this.leastSignificantBits = leastSignificantBits;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeLittleEndianLong(this.mostSignificantBits);
			this.writeLittleEndianLong(this.leastSignificantBits);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.mostSignificantBits=this.readLittleEndianLong();
			this.leastSignificantBits=this.readLittleEndianLong();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.McpeUuid().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "McpeUuid(mostSignificantBits: " + this.mostSignificantBits + ", leastSignificantBits: " + this.leastSignificantBits + ")";
		}

	},

	PlayerList: class extends Buffer {

		/**
		 * @param uuid
		 *        UUID of the player. If it's associated with an XBOX Live account the player's profile will also be
		 *        available in pause menu.
		 * @param entityId
		 *        Player's id, used to associate the skin with the game's entity spawned with {AddPlayer}.
		 * @param displayName
		 *        Player's display name, that can contain Minecraft's formatting codes. It shouldn't contain suffixes
		 *        nor prefixes.
		 * @param skin
		 *        Player's skin usually given in the {Login}'s packet body.
		 */
		constructor(uuid=null, entityId=0, displayName="", skin=null, unknown4="") {
			super();
			this.uuid = uuid;
			this.entityId = entityId;
			this.displayName = displayName;
			this.skin = skin;
			this.unknown4 = unknown4;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeBytes(this.uuid.encode());
			this.writeVarlong(this.entityId);
			var dhc5anbf=this.encodeString(this.displayName); this.writeVaruint(dhc5anbf.length); this.writeBytes(dhc5anbf);
			this.writeBytes(this.skin.encode());
			var dhc5btbd=this.encodeString(this.unknown4); this.writeVaruint(dhc5btbd.length); this.writeBytes(dhc5btbd);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.uuid=Types.McpeUuid.fromBuffer(this._buffer); this._buffer=this.uuid._buffer;
			this.entityId=this.readVarlong();
			this.displayName=this.decodeString(this.readBytes(this.readVaruint()));
			this.skin=Types.Skin.fromBuffer(this._buffer); this._buffer=this.skin._buffer;
			this.unknown4=this.decodeString(this.readBytes(this.readVaruint()));
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.PlayerList().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "PlayerList(uuid: " + this.uuid + ", entityId: " + this.entityId + ", displayName: " + this.displayName + ", skin: " + this.skin + ", unknown4: " + this.unknown4 + ")";
		}

	},

	Skin: class extends Buffer {

		/**
		 * @param name
		 *        Name of the skin. It's used to render the shape of the skin correctly.
		 * @param data
		 *        Bytes of the skin in format RGBA. The length should be 8192 or 16382.
		 */
		constructor(name="", data=[], capeData=[], geometryName="", geometryData=[]) {
			super();
			this.name = name;
			this.data = data;
			this.capeData = capeData;
			this.geometryName = geometryName;
			this.geometryData = geometryData;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			var dhc5y1=this.encodeString(this.name); this.writeVaruint(dhc5y1.length); this.writeBytes(dhc5y1);
			this.writeVaruint(this.data.length); this.writeBytes(this.data);
			this.writeVaruint(this.capeData.length); this.writeBytes(this.capeData);
			var dhc5z9zr=this.encodeString(this.geometryName); this.writeVaruint(dhc5z9zr.length); this.writeBytes(dhc5z9zr);
			this.writeVaruint(this.geometryData.length); this.writeBytes(this.geometryData);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.name=this.decodeString(this.readBytes(this.readVaruint()));
			var aramzfy=this.readVaruint(); this.data=this.readBytes(aramzfy);
			var aramyfzr=this.readVaruint(); this.capeData=this.readBytes(aramyfzr);
			this.geometryName=this.decodeString(this.readBytes(this.readVaruint()));
			var aramzvbv=this.readVaruint(); this.geometryData=this.readBytes(aramzvbv);
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Skin().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Skin(name: " + this.name + ", data: " + this.data + ", capeData: " + this.capeData + ", geometryName: " + this.geometryName + ", geometryData: " + this.geometryData + ")";
		}

	},

	Link: class extends Buffer {

		// action
		static get ADD(){ return 0; }
		static get RIDE(){ return 1; }
		static get REMOVE(){ return 2; }

		constructor(from=0, to=0, action=0, unknown3=0) {
			super();
			this.from = from;
			this.to = to;
			this.action = action;
			this.unknown3 = unknown3;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVarlong(this.from);
			this.writeVarlong(this.to);
			this.writeLittleEndianByte(this.action);
			this.writeLittleEndianByte(this.unknown3);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.from=this.readVarlong();
			this.to=this.readVarlong();
			this.action=this.readLittleEndianByte();
			this.unknown3=this.readLittleEndianByte();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Link().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Link(from: " + this.from + ", to: " + this.to + ", action: " + this.action + ", unknown3: " + this.unknown3 + ")";
		}

	},

	Recipe: class extends Buffer {

		// type
		static get SHAPELESS(){ return 0; }
		static get SHAPED(){ return 1; }
		static get FURNACE(){ return 2; }
		static get FURNACE_DATA(){ return 3; }
		static get MULTI(){ return 4; }

		constructor(type=0, data=null) {
			super();
			this.type = type;
			this.data = data;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVarint(this.type);
			this.writeBytes(this.data);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.type=this.readVarint();
			this.data=Array.from(this._buffer); this._buffer=[];
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Recipe().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Recipe(type: " + this.type + ", data: " + this.data + ")";
		}

	},

	InventoryAction: class extends Buffer {

		// source
		static get CONTAINER(){ return 0; }
		static get WORLD(){ return 2; }
		static get CREATIVE(){ return 3; }

		constructor(source=0, container=-1, unknown2=0, slot=0, oldItem=null, newItem=null) {
			super();
			this.source = source;
			this.container = container;
			this.unknown2 = unknown2;
			this.slot = slot;
			this.oldItem = oldItem;
			this.newItem = newItem;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(this.source);
			if(source==0){ this.writeVarint(this.container); }
			if(source==2){ this.writeVaruint(this.unknown2); }
			this.writeVaruint(this.slot);
			this.writeBytes(this.oldItem.encode());
			this.writeBytes(this.newItem.encode());
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.source=this.readVaruint();
			if(source==0){ this.container=this.readVarint(); }
			if(source==2){ this.unknown2=this.readVaruint(); }
			this.slot=this.readVaruint();
			this.oldItem=Types.Slot.fromBuffer(this._buffer); this._buffer=this.oldItem._buffer;
			this.newItem=Types.Slot.fromBuffer(this._buffer); this._buffer=this.newItem._buffer;
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.InventoryAction().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "InventoryAction(source: " + this.source + ", container: " + this.container + ", unknown2: " + this.unknown2 + ", slot: " + this.slot + ", oldItem: " + this.oldItem + ", newItem: " + this.newItem + ")";
		}

	},

	ChunkData: class extends Buffer {

		/**
		 * @param sections
		 *        16x16x16 section of the chunk. The array's keys also indicate the section's height (the 3rd element
		 *        of the array will be the 3rd section from bottom, starting at `y=24`).
		 *        The amount of sections should be in a range from 0 (empty chunk) to 16.
		 * @param biomes
		 *        [Biomes](http://minecraft.gamepedia.com/Biome) in order `xz`.
		 * @param borders
		 *        Colums where there are world borders (in format `xz`). This feature hasn't been implemented in
		 *        the game yet and crashes the client.
		 * @param blockEntities
		 *        Additional data for the chunk's block entities (tiles), encoded in the same way as {BlockEntityData.nbt}
		 *        is. The position is given by the `Int` tags `x`, `y`, `z` which are added to the block's compound tag
		 *        together with the `String` tag `id` that contains the name of the tile in pascal case.
		 *        Wrong encoding or missing tags may result in the block becoming invisible.
		 */
		constructor(sections=[], heights=new Uint16Array(256), biomes=new Uint8Array(256), borders=[], extraData=[], blockEntities=null) {
			super();
			this.sections = sections;
			this.heights = heights;
			this.biomes = biomes;
			this.borders = borders;
			this.extraData = extraData;
			this.blockEntities = blockEntities;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(this.sections.length); for(var dhc5zna9 in this.sections){ this.writeBytes(this.sections[dhc5zna9].encode()); }
			for(var dhc5zlar in this.heights){ this.writeLittleEndianShort(this.heights[dhc5zlar]); }
			this.writeBytes(this.biomes);
			this.writeVaruint(this.borders.length); this.writeBytes(this.borders);
			this.writeVaruint(this.extraData.length); for(var dhc5eryr in this.extraData){ this.writeBytes(this.extraData[dhc5eryr].encode()); }
			this.writeBytes(this.blockEntities);
			var _length = this._buffer.length;
			this.writeVaruint(_length);
			var _length_array = [];
			while(this._buffer.length > _length) _length_array.push(this._buffer.pop());
			while(_length_array.length > 0) this._buffer.unshift(_length_array.shift());
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _length=this.readVaruint();
			_buffer = this._buffer.slice(_length);
			if(this._buffer.length > _length) this._buffer.length = _length;
			var aramcvdl=this.readVaruint(); this.sections=[]; for(var dhc5zna9=0;dhc5zna9<aramcvdl;dhc5zna9++){ this.sections[dhc5zna9]=Types.Section.fromBuffer(this._buffer); this._buffer=this.sections[dhc5zna9]._buffer; }
			var aramavzh=256; this.heights=[]; for(var dhc5zlar=0;dhc5zlar<aramavzh;dhc5zlar++){ this.heights[dhc5zlar]=this.readLittleEndianShort(); }
			var aramylbv=256; this.biomes=this.readBytes(aramylbv);
			var aramy9zv=this.readVaruint(); this.borders=this.readBytes(aramy9zv);
			var aramzhcf=this.readVaruint(); this.extraData=[]; for(var dhc5eryr=0;dhc5eryr<aramzhcf;dhc5eryr++){ this.extraData[dhc5eryr]=Types.ExtraData.fromBuffer(this._buffer); this._buffer=this.extraData[dhc5eryr]._buffer; }
			this.blockEntities=Array.from(this._buffer); this._buffer=[];
			this._buffer = _buffer;
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.ChunkData().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "ChunkData(sections: " + this.sections + ", heights: " + this.heights + ", biomes: " + this.biomes + ", borders: " + this.borders + ", extraData: " + this.extraData + ", blockEntities: " + this.blockEntities + ")";
		}

	},

	Section: class extends Buffer {

		constructor(storageVersion=0, blockIds=new Uint8Array(4096), blockMetas=new Uint8Array(2048)) {
			super();
			this.storageVersion = storageVersion;
			this.blockIds = blockIds;
			this.blockMetas = blockMetas;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeLittleEndianByte(this.storageVersion);
			this.writeBytes(this.blockIds);
			this.writeBytes(this.blockMetas);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.storageVersion=this.readLittleEndianByte();
			var aramyxyt=4096; this.blockIds=this.readBytes(aramyxyt);
			var aramyxyt=2048; this.blockMetas=this.readBytes(aramyxyt);
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Section().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Section(storageVersion: " + this.storageVersion + ", blockIds: " + this.blockIds + ", blockMetas: " + this.blockMetas + ")";
		}

	},

	ExtraData: class extends Buffer {

		constructor(key=0, value=0) {
			super();
			this.key = key;
			this.value = value;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(this.key);
			this.writeLittleEndianShort(this.value);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.key=this.readVaruint();
			this.value=this.readLittleEndianShort();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.ExtraData().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "ExtraData(key: " + this.key + ", value: " + this.value + ")";
		}

	},

	Decoration: class extends Buffer {

		/**
		 * @param color
		 *        ARGB colour.
		 */
		constructor(rotationAndIcon=0, position={x:0,z:0}, label="", color=0) {
			super();
			this.rotationAndIcon = rotationAndIcon;
			this.position = position;
			this.label = label;
			this.color = color;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVarint(this.rotationAndIcon);
			this.writeLittleEndianByte(this.position.x); this.writeLittleEndianByte(this.position.z);
			var dhc5yjb=this.encodeString(this.label); this.writeVaruint(dhc5yjb.length); this.writeBytes(dhc5yjb);
			this.writeLittleEndianInt(this.color);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.rotationAndIcon=this.readVarint();
			this.position={}; this.position.x=this.readLittleEndianByte(); this.position.z=this.readLittleEndianByte();
			this.label=this.decodeString(this.readBytes(this.readVaruint()));
			this.color=this.readLittleEndianInt();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Decoration().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Decoration(rotationAndIcon: " + this.rotationAndIcon + ", position: " + this.position + ", label: " + this.label + ", color: " + this.color + ")";
		}

	},

	Rule: class extends Buffer {

		// name
		static get COMMAND_BLOCK_OUTPUT(){ return commandblockoutput; }
		static get DO_DAYLIGHT_CYCLE(){ return dodaylightcycle; }
		static get DO_ENTITY_DROPS(){ return doentitydrops; }
		static get DO_FIRE_TICK(){ return dofiretick; }
		static get DO_MOB_LOOT(){ return domobloot; }
		static get DO_MOB_SPAWNING(){ return domobspawning; }
		static get DO_TILE_DROPS(){ return dotiledrops; }
		static get DO_WEATHER_CYCLE(){ return doweathercycle; }
		static get DROWNING_DAMAGE(){ return drowningdamage; }
		static get FALL_DAMAGE(){ return falldamage; }
		static get FIRE_DAMAGE(){ return firedamage; }
		static get KEEP_INVENTORY(){ return keepinventory; }
		static get MOB_GRIEFING(){ return mobgriefing; }
		static get PVP(){ return pvp; }
		static get SEND_COMMAND_FEEDBACK(){ return sendcommandfeedback; }

		// type
		static get BOOLEAN(){ return 1; }
		static get INTEGER(){ return 2; }
		static get FLOATING(){ return 3; }

		/**
		 * @param name
		 *        Name of the rule. Same of the `gamerule` command's field in the game.
		 *        The behaviours indicated in the following constants' descriptions is enabled or disabled.
		 */
		constructor(name="", type=0, booleanValue=false, integerValue=0, floatingValue=.0) {
			super();
			this.name = name;
			this.type = type;
			this.booleanValue = booleanValue;
			this.integerValue = integerValue;
			this.floatingValue = floatingValue;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			var dhc5y1=this.encodeString(this.name); this.writeVaruint(dhc5y1.length); this.writeBytes(dhc5y1);
			this.writeLittleEndianByte(this.type);
			if(type==1){ this.writeBigEndianByte(this.booleanValue?1:0); }
			if(type==2){ this.writeVaruint(this.integerValue); }
			if(type==3){ this.writeLittleEndianFloat(this.floatingValue); }
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.name=this.decodeString(this.readBytes(this.readVaruint()));
			this.type=this.readLittleEndianByte();
			if(type==1){ this.booleanValue=this.readBigEndianByte()!==0; }
			if(type==2){ this.integerValue=this.readVaruint(); }
			if(type==3){ this.floatingValue=this.readLittleEndianFloat(); }
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Rule().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Rule(name: " + this.name + ", type: " + this.type + ", booleanValue: " + this.booleanValue + ", integerValue: " + this.integerValue + ", floatingValue: " + this.floatingValue + ")";
		}

	},

	Enum: class extends Buffer {

		constructor(name="", valuesIndexes=[]) {
			super();
			this.name = name;
			this.valuesIndexes = valuesIndexes;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			var dhc5y1=this.encodeString(this.name); this.writeVaruint(dhc5y1.length); this.writeBytes(dhc5y1);
			this.writeVaruint(this.valuesIndexes.length); for(var dhc5yxzn in this.valuesIndexes){ this.writeLittleEndianShort(this.valuesIndexes[dhc5yxzn]); }
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.name=this.decodeString(this.readBytes(this.readVaruint()));
			var aramdfdv=this.readVaruint(); this.valuesIndexes=[]; for(var dhc5yxzn=0;dhc5yxzn<aramdfdv;dhc5yxzn++){ this.valuesIndexes[dhc5yxzn]=this.readLittleEndianShort(); }
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Enum().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Enum(name: " + this.name + ", valuesIndexes: " + this.valuesIndexes + ")";
		}

	},

	Command: class extends Buffer {

		constructor(name="", description="", unknown2=0, permissionLevel=0, aliasesEnum=-1, overloads=[]) {
			super();
			this.name = name;
			this.description = description;
			this.unknown2 = unknown2;
			this.permissionLevel = permissionLevel;
			this.aliasesEnum = aliasesEnum;
			this.overloads = overloads;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			var dhc5y1=this.encodeString(this.name); this.writeVaruint(dhc5y1.length); this.writeBytes(dhc5y1);
			var dhc5zncl=this.encodeString(this.description); this.writeVaruint(dhc5zncl.length); this.writeBytes(dhc5zncl);
			this.writeLittleEndianByte(this.unknown2);
			this.writeLittleEndianByte(this.permissionLevel);
			this.writeLittleEndianInt(this.aliasesEnum);
			this.writeVaruint(this.overloads.length); for(var dhc5dvb9 in this.overloads){ this.writeBytes(this.overloads[dhc5dvb9].encode()); }
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.name=this.decodeString(this.readBytes(this.readVaruint()));
			this.description=this.decodeString(this.readBytes(this.readVaruint()));
			this.unknown2=this.readLittleEndianByte();
			this.permissionLevel=this.readLittleEndianByte();
			this.aliasesEnum=this.readLittleEndianInt();
			var arambzcx=this.readVaruint(); this.overloads=[]; for(var dhc5dvb9=0;dhc5dvb9<arambzcx;dhc5dvb9++){ this.overloads[dhc5dvb9]=Types.Overload.fromBuffer(this._buffer); this._buffer=this.overloads[dhc5dvb9]._buffer; }
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Command().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Command(name: " + this.name + ", description: " + this.description + ", unknown2: " + this.unknown2 + ", permissionLevel: " + this.permissionLevel + ", aliasesEnum: " + this.aliasesEnum + ", overloads: " + this.overloads + ")";
		}

	},

	Overload: class extends Buffer {

		constructor(parameters=[]) {
			super();
			this.parameters = parameters;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(this.parameters.length); for(var dhc5yjbv in this.parameters){ this.writeBytes(this.parameters[dhc5yjbv].encode()); }
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var aramcfy1=this.readVaruint(); this.parameters=[]; for(var dhc5yjbv=0;dhc5yjbv<aramcfy1;dhc5yjbv++){ this.parameters[dhc5yjbv]=Types.Parameter.fromBuffer(this._buffer); this._buffer=this.parameters[dhc5yjbv]._buffer; }
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Overload().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Overload(parameters: " + this.parameters + ")";
		}

	},

	Parameter: class extends Buffer {

		// type
		static get VALID(){ return 1048576; }
		static get INT(){ return 1; }
		static get FLOAT(){ return 2; }
		static get MIXED(){ return 3; }
		static get TARGET(){ return 4; }
		static get STRING(){ return 13; }
		static get POSITION(){ return 14; }
		static get RAWTEXT(){ return 17; }
		static get TEXT(){ return 19; }
		static get JSON(){ return 22; }
		static get COMMAND(){ return 29; }
		static get ENUM(){ return 2097152; }
		static get TEMPLATE(){ return 16777216; }

		constructor(name="", type=0, optional=false) {
			super();
			this.name = name;
			this.type = type;
			this.optional = optional;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			var dhc5y1=this.encodeString(this.name); this.writeVaruint(dhc5y1.length); this.writeBytes(dhc5y1);
			this.writeLittleEndianInt(this.type);
			this.writeBigEndianByte(this.optional?1:0);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.name=this.decodeString(this.readBytes(this.readVaruint()));
			this.type=this.readLittleEndianInt();
			this.optional=this.readBigEndianByte()!==0;
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Parameter().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Parameter(name: " + this.name + ", type: " + this.type + ", optional: " + this.optional + ")";
		}

	}

}

//export { Types }