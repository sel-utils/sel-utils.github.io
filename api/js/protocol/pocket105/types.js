/*
 * This file was automatically generated by sel-utils and
 * released under the MIT License.
 * 
 * License: https://github.com/sel-project/sel-utils/blob/master/LICENSE
 * Repository: https://github.com/sel-project/sel-utils
 * Generated from https://github.com/sel-project/sel-utils/blob/master/xml/protocol/pocket105.xml
 */
/** @module sul/protocol/pocket105/types */

const Types = {

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
		constructor(id=0, metaAndCount=0, nbt=null) {
			super();
			this.id = id;
			this.metaAndCount = metaAndCount;
			this.nbt = nbt;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVarint(this.id);
			if(id>0){ this.writeVarint(this.metaAndCount); }
			if(id>0){ this.writeLittleEndianShort(this.nbt.length); this.writeBytes(this.nbt); }
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.id=this.readVarint();
			if(id>0){ this.metaAndCount=this.readVarint(); }
			if(id>0){ var arambj=this.readLittleEndianShort(); this.nbt=this.readBytes(arambj); }
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Slot().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Slot(id: " + this.id + ", metaAndCount: " + this.metaAndCount + ", nbt: " + this.nbt + ")";
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

	Skin: class extends Buffer {

		/**
		 * @param name
		 *        Name of the skin. It's used to render the shape of the skin correctly.
		 * @param data
		 *        Bytes of the skin in format RGBA. The length should be 8192 or 16382.
		 */
		constructor(name="", data=[]) {
			super();
			this.name = name;
			this.data = data;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			var dhc5y1=this.encodeString(this.name); this.writeVaruint(dhc5y1.length); this.writeBytes(dhc5y1);
			this.writeVaruint(this.data.length); this.writeBytes(this.data);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.name=this.decodeString(this.readBytes(this.readVaruint()));
			var aramzfy=this.readVaruint(); this.data=this.readBytes(aramzfy);
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Skin().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Skin(name: " + this.name + ", data: " + this.data + ")";
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
		constructor(uuid=new Uint8Array(16), entityId=0, displayName="", skin=null) {
			super();
			this.uuid = uuid;
			this.entityId = entityId;
			this.displayName = displayName;
			this.skin = skin;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeBytes(this.uuid);
			this.writeVarlong(this.entityId);
			var dhc5anbf=this.encodeString(this.displayName); this.writeVaruint(dhc5anbf.length); this.writeBytes(dhc5anbf);
			this.writeBytes(this.skin.encode());
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.uuid=this.readBytes(16);
			this.entityId=this.readVarlong();
			this.displayName=this.decodeString(this.readBytes(this.readVaruint()));
			this.skin=Types.Skin.fromBuffer(this._buffer); this._buffer=this.skin._buffer;
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.PlayerList().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "PlayerList(uuid: " + this.uuid + ", entityId: " + this.entityId + ", displayName: " + this.displayName + ", skin: " + this.skin + ")";
		}

	},

	Link: class extends Buffer {

		// action
		static get ADD(){ return 0; }
		static get RIDE(){ return 1; }
		static get REMOVE(){ return 2; }

		constructor(from=0, to=0, action=0) {
			super();
			this.from = from;
			this.to = to;
			this.action = action;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVarlong(this.from);
			this.writeVarlong(this.to);
			this.writeBigEndianByte(this.action);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.from=this.readVarlong();
			this.to=this.readVarlong();
			this.action=this.readBigEndianByte();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Link().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Link(from: " + this.from + ", to: " + this.to + ", action: " + this.action + ")";
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

	ChunkData: class extends Buffer {

		/**
		 * @param sections
		 *        16x16x16 section of the chunk. The array's keys also indicate the section's height (the 3rd element
		 *        of the array will be the 3rd section from bottom, starting at `y=24`).
		 *        The amount of sections should be in a range from 0 (empty chunk) to 16.
		 * @param heights
		 *        Coordinates of the highest block in the column that receives sky light (order `xz`). It is used to
		 *        increase the speed when calculating the block's light level.
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
			for(var dhc5zlar in this.heights){ this.writeBigEndianShort(this.heights[dhc5zlar]); }
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
			var aramavzh=256; this.heights=[]; for(var dhc5zlar=0;dhc5zlar<aramavzh;dhc5zlar++){ this.heights[dhc5zlar]=this.readBigEndianShort(); }
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

		constructor(storageVersion=0, blockIds=new Uint8Array(4096), blockMetas=new Uint8Array(2048), skyLight=new Uint8Array(2048), blockLight=new Uint8Array(2048)) {
			super();
			this.storageVersion = storageVersion;
			this.blockIds = blockIds;
			this.blockMetas = blockMetas;
			this.skyLight = skyLight;
			this.blockLight = blockLight;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeBigEndianByte(this.storageVersion);
			this.writeBytes(this.blockIds);
			this.writeBytes(this.blockMetas);
			this.writeBytes(this.skyLight);
			this.writeBytes(this.blockLight);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.storageVersion=this.readBigEndianByte();
			var aramyxyt=4096; this.blockIds=this.readBytes(aramyxyt);
			var aramyxyt=2048; this.blockMetas=this.readBytes(aramyxyt);
			var aramcttl=2048; this.skyLight=this.readBytes(aramcttl);
			var aramyxyt=2048; this.blockLight=this.readBytes(aramyxyt);
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Section().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Section(storageVersion: " + this.storageVersion + ", blockIds: " + this.blockIds + ", blockMetas: " + this.blockMetas + ", skyLight: " + this.skyLight + ", blockLight: " + this.blockLight + ")";
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
			this.writeBigEndianByte(this.position.x); this.writeBigEndianByte(this.position.z);
			var dhc5yjb=this.encodeString(this.label); this.writeVaruint(dhc5yjb.length); this.writeBytes(dhc5yjb);
			this.writeLittleEndianInt(this.color);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.rotationAndIcon=this.readVarint();
			this.position={}; this.position.x=this.readBigEndianByte(); this.position.z=this.readBigEndianByte();
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
		static get DROWNING_DAMAGE(){ return drowningdamage; }
		static get FALL_DAMAGE(){ return falldamage; }
		static get FIRE_DAMAGE(){ return firedamage; }
		static get PVP(){ return pvp; }
		static get SEND_COMMAND_FEEDBACK(){ return sendcommandfeedback; }

		/**
		 * @param name
		 *        Name of the rule. Same of the `gamerule` command's field in the game.
		 *        The behaviours indicated in the following constants' descriptions is enabled or disabled.
		 * @param value
		 *        Indicates whether the game rule is enabled.
		 */
		constructor(name="", value=false, unknown2=false) {
			super();
			this.name = name;
			this.value = value;
			this.unknown2 = unknown2;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			var dhc5y1=this.encodeString(this.name); this.writeVaruint(dhc5y1.length); this.writeBytes(dhc5y1);
			this.writeBigEndianByte(this.value?1:0);
			this.writeBigEndianByte(this.unknown2?1:0);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.name=this.decodeString(this.readBytes(this.readVaruint()));
			this.value=this.readBigEndianByte()!==0;
			this.unknown2=this.readBigEndianByte()!==0;
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Rule().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Rule(name: " + this.name + ", value: " + this.value + ", unknown2: " + this.unknown2 + ")";
		}

	}

}

//export { Types }