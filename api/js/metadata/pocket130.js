/*
 * This file was automatically generated by sel-utils and
 * released under the MIT License.
 * 
 * License: https://github.com/sel-project/sel-utils/blob/master/LICENSE
 * Repository: https://github.com/sel-project/sel-utils
 * Generated from https://github.com/sel-project/sel-utils/blob/master/xml/metadata/pocket130.xml
 */
/** @module sul/metadata/pocket130 */

class Metadata extends Buffer {

	constructor() {
		super();
		this._entityFlags = 0;
		this._health = undefined;
		this._variant = undefined;
		this._color = undefined;
		this._nametag = undefined;
		this._owner = undefined;
		this._target = undefined;
		this._air = 0;
		this._potionColor = undefined;
		this._potionAmbient = undefined;
		this._hurtTime = undefined;
		this._hurtDirection = undefined;
		this._paddleTimeLeft = undefined;
		this._paddleTimeRight = undefined;
		this._experienceCount = undefined;
		this._minecartBlock = undefined;
		this._minecartOffset = undefined;
		this._minecartHasBlock = undefined;
		this._endermanItemId = undefined;
		this._endermanItemDamage = undefined;
		this._age = undefined;
		this._playerFlags = undefined;
		this._playerIndex = undefined;
		this._bedPosition = undefined;
		this._fireballPowerX = undefined;
		this._fireballPowerY = undefined;
		this._fireballPowerZ = undefined;
		this._potionAuxValue = undefined;
		this._leadHolder = -1;
		this._scale = undefined;
		this._interactiveTag = undefined;
		this._npcId = undefined;
		this._interactiveTagUrl = undefined;
		this._maxAir = undefined;
		this._markVariant = undefined;
		this._blockTarget = undefined;
		this._invulnerableTime = undefined;
		this._centerHeadTarget = undefined;
		this._leftHeadTarget = undefined;
		this._rightHeadTarget = undefined;
		this._boundingBoxWidth = undefined;
		this._boundingBoxHeight = undefined;
		this._fuseLength = undefined;
		this._riderSeatPosition = undefined;
		this._riderRotationLocked = undefined;
		this._riderMaxRotation = undefined;
		this._riderMinRotation = undefined;
		this._areaEffectCloudRadius = undefined;
		this._areaEffectCloudWaiting = undefined;
		this._areaEffectCloudParticle = undefined;
		this._shulkerPeakHeight = undefined;
		this._shulkerDirection = undefined;
		this._shulkerAttachment = undefined;
		this._tradingPlayer = undefined;
		this._commandBlockCommand = undefined;
		this._commandBlockLastOutput = undefined;
		this._commandBlockTrackOutput = undefined;
		this._controllingRiderSeatNumber = undefined;
		this._strength = undefined;
		this._maxStrength = undefined;
	}

	get entityFlags() {
		return this._entityFlags;
	}

	set entityFlags(value) {
		return this._entityFlags = value;
	}

	get onFire() {
		return ((this.entityFlags >>> 0) & 1) === 1;
	}

	set onFire(value) {
		if(value) this._entityFlags |= true << 0;
		else this._entityFlags &= ~(true << 0);
		return value;
	}

	get sneaking() {
		return ((this.entityFlags >>> 1) & 1) === 1;
	}

	set sneaking(value) {
		if(value) this._entityFlags |= true << 1;
		else this._entityFlags &= ~(true << 1);
		return value;
	}

	get riding() {
		return ((this.entityFlags >>> 2) & 1) === 1;
	}

	set riding(value) {
		if(value) this._entityFlags |= true << 2;
		else this._entityFlags &= ~(true << 2);
		return value;
	}

	get sprinting() {
		return ((this.entityFlags >>> 3) & 1) === 1;
	}

	set sprinting(value) {
		if(value) this._entityFlags |= true << 3;
		else this._entityFlags &= ~(true << 3);
		return value;
	}

	get usingItem() {
		return ((this.entityFlags >>> 4) & 1) === 1;
	}

	set usingItem(value) {
		if(value) this._entityFlags |= true << 4;
		else this._entityFlags &= ~(true << 4);
		return value;
	}

	get invisible() {
		return ((this.entityFlags >>> 5) & 1) === 1;
	}

	set invisible(value) {
		if(value) this._entityFlags |= true << 5;
		else this._entityFlags &= ~(true << 5);
		return value;
	}

	get tempted() {
		return ((this.entityFlags >>> 6) & 1) === 1;
	}

	set tempted(value) {
		if(value) this._entityFlags |= true << 6;
		else this._entityFlags &= ~(true << 6);
		return value;
	}

	get inLove() {
		return ((this.entityFlags >>> 7) & 1) === 1;
	}

	set inLove(value) {
		if(value) this._entityFlags |= true << 7;
		else this._entityFlags &= ~(true << 7);
		return value;
	}

	get saddled() {
		return ((this.entityFlags >>> 8) & 1) === 1;
	}

	set saddled(value) {
		if(value) this._entityFlags |= true << 8;
		else this._entityFlags &= ~(true << 8);
		return value;
	}

	get powered() {
		return ((this.entityFlags >>> 9) & 1) === 1;
	}

	set powered(value) {
		if(value) this._entityFlags |= true << 9;
		else this._entityFlags &= ~(true << 9);
		return value;
	}

	get ignited() {
		return ((this.entityFlags >>> 10) & 1) === 1;
	}

	set ignited(value) {
		if(value) this._entityFlags |= true << 10;
		else this._entityFlags &= ~(true << 10);
		return value;
	}

	get baby() {
		return ((this.entityFlags >>> 11) & 1) === 1;
	}

	set baby(value) {
		if(value) this._entityFlags |= true << 11;
		else this._entityFlags &= ~(true << 11);
		return value;
	}

	get converting() {
		return ((this.entityFlags >>> 12) & 1) === 1;
	}

	set converting(value) {
		if(value) this._entityFlags |= true << 12;
		else this._entityFlags &= ~(true << 12);
		return value;
	}

	get critical() {
		return ((this.entityFlags >>> 13) & 1) === 1;
	}

	set critical(value) {
		if(value) this._entityFlags |= true << 13;
		else this._entityFlags &= ~(true << 13);
		return value;
	}

	get showNametag() {
		return ((this.entityFlags >>> 14) & 1) === 1;
	}

	set showNametag(value) {
		if(value) this._entityFlags |= true << 14;
		else this._entityFlags &= ~(true << 14);
		return value;
	}

	get alwaysShowNametag() {
		return ((this.entityFlags >>> 15) & 1) === 1;
	}

	set alwaysShowNametag(value) {
		if(value) this._entityFlags |= true << 15;
		else this._entityFlags &= ~(true << 15);
		return value;
	}

	get noAi() {
		return ((this.entityFlags >>> 16) & 1) === 1;
	}

	set noAi(value) {
		if(value) this._entityFlags |= true << 16;
		else this._entityFlags &= ~(true << 16);
		return value;
	}

	get silent() {
		return ((this.entityFlags >>> 17) & 1) === 1;
	}

	set silent(value) {
		if(value) this._entityFlags |= true << 17;
		else this._entityFlags &= ~(true << 17);
		return value;
	}

	get climbing() {
		return ((this.entityFlags >>> 18) & 1) === 1;
	}

	set climbing(value) {
		if(value) this._entityFlags |= true << 18;
		else this._entityFlags &= ~(true << 18);
		return value;
	}

	get canClimb() {
		return ((this.entityFlags >>> 19) & 1) === 1;
	}

	set canClimb(value) {
		if(value) this._entityFlags |= true << 19;
		else this._entityFlags &= ~(true << 19);
		return value;
	}

	get canSwim() {
		return ((this.entityFlags >>> 20) & 1) === 1;
	}

	set canSwim(value) {
		if(value) this._entityFlags |= true << 20;
		else this._entityFlags &= ~(true << 20);
		return value;
	}

	get canFly() {
		return ((this.entityFlags >>> 21) & 1) === 1;
	}

	set canFly(value) {
		if(value) this._entityFlags |= true << 21;
		else this._entityFlags &= ~(true << 21);
		return value;
	}

	get resting() {
		return ((this.entityFlags >>> 22) & 1) === 1;
	}

	set resting(value) {
		if(value) this._entityFlags |= true << 22;
		else this._entityFlags &= ~(true << 22);
		return value;
	}

	get sitting() {
		return ((this.entityFlags >>> 23) & 1) === 1;
	}

	set sitting(value) {
		if(value) this._entityFlags |= true << 23;
		else this._entityFlags &= ~(true << 23);
		return value;
	}

	get angry() {
		return ((this.entityFlags >>> 24) & 1) === 1;
	}

	set angry(value) {
		if(value) this._entityFlags |= true << 24;
		else this._entityFlags &= ~(true << 24);
		return value;
	}

	get interested() {
		return ((this.entityFlags >>> 25) & 1) === 1;
	}

	set interested(value) {
		if(value) this._entityFlags |= true << 25;
		else this._entityFlags &= ~(true << 25);
		return value;
	}

	get charged() {
		return ((this.entityFlags >>> 26) & 1) === 1;
	}

	set charged(value) {
		if(value) this._entityFlags |= true << 26;
		else this._entityFlags &= ~(true << 26);
		return value;
	}

	get tamed() {
		return ((this.entityFlags >>> 27) & 1) === 1;
	}

	set tamed(value) {
		if(value) this._entityFlags |= true << 27;
		else this._entityFlags &= ~(true << 27);
		return value;
	}

	get leashed() {
		return ((this.entityFlags >>> 28) & 1) === 1;
	}

	set leashed(value) {
		if(value) this._entityFlags |= true << 28;
		else this._entityFlags &= ~(true << 28);
		return value;
	}

	get sheared() {
		return ((this.entityFlags >>> 29) & 1) === 1;
	}

	set sheared(value) {
		if(value) this._entityFlags |= true << 29;
		else this._entityFlags &= ~(true << 29);
		return value;
	}

	get gliding() {
		return ((this.entityFlags >>> 30) & 1) === 1;
	}

	set gliding(value) {
		if(value) this._entityFlags |= true << 30;
		else this._entityFlags &= ~(true << 30);
		return value;
	}

	get elder() {
		return ((this.entityFlags >>> 31) & 1) === 1;
	}

	set elder(value) {
		if(value) this._entityFlags |= true << 31;
		else this._entityFlags &= ~(true << 31);
		return value;
	}

	get moving() {
		return ((this.entityFlags >>> 32) & 1) === 1;
	}

	set moving(value) {
		if(value) this._entityFlags |= true << 32;
		else this._entityFlags &= ~(true << 32);
		return value;
	}

	get breathing() {
		return ((this.entityFlags >>> 33) & 1) === 1;
	}

	set breathing(value) {
		if(value) this._entityFlags |= true << 33;
		else this._entityFlags &= ~(true << 33);
		return value;
	}

	get chested() {
		return ((this.entityFlags >>> 34) & 1) === 1;
	}

	set chested(value) {
		if(value) this._entityFlags |= true << 34;
		else this._entityFlags &= ~(true << 34);
		return value;
	}

	get stackable() {
		return ((this.entityFlags >>> 35) & 1) === 1;
	}

	set stackable(value) {
		if(value) this._entityFlags |= true << 35;
		else this._entityFlags &= ~(true << 35);
		return value;
	}

	get showbase() {
		return ((this.entityFlags >>> 36) & 1) === 1;
	}

	set showbase(value) {
		if(value) this._entityFlags |= true << 36;
		else this._entityFlags &= ~(true << 36);
		return value;
	}

	get rearing() {
		return ((this.entityFlags >>> 37) & 1) === 1;
	}

	set rearing(value) {
		if(value) this._entityFlags |= true << 37;
		else this._entityFlags &= ~(true << 37);
		return value;
	}

	get vibrating() {
		return ((this.entityFlags >>> 38) & 1) === 1;
	}

	set vibrating(value) {
		if(value) this._entityFlags |= true << 38;
		else this._entityFlags &= ~(true << 38);
		return value;
	}

	get idling() {
		return ((this.entityFlags >>> 39) & 1) === 1;
	}

	set idling(value) {
		if(value) this._entityFlags |= true << 39;
		else this._entityFlags &= ~(true << 39);
		return value;
	}

	get evokerSpell() {
		return ((this.entityFlags >>> 40) & 1) === 1;
	}

	set evokerSpell(value) {
		if(value) this._entityFlags |= true << 40;
		else this._entityFlags &= ~(true << 40);
		return value;
	}

	get chargeAttack() {
		return ((this.entityFlags >>> 41) & 1) === 1;
	}

	set chargeAttack(value) {
		if(value) this._entityFlags |= true << 41;
		else this._entityFlags &= ~(true << 41);
		return value;
	}

	get isWASDcontrolled() {
		return ((this.entityFlags >>> 42) & 1) === 1;
	}

	set isWASDcontrolled(value) {
		if(value) this._entityFlags |= true << 42;
		else this._entityFlags &= ~(true << 42);
		return value;
	}

	get linger() {
		return ((this.entityFlags >>> 45) & 1) === 1;
	}

	set linger(value) {
		if(value) this._entityFlags |= true << 45;
		else this._entityFlags &= ~(true << 45);
		return value;
	}

	get gravity() {
		return ((this.entityFlags >>> 46) & 1) === 1;
	}

	set gravity(value) {
		if(value) this._entityFlags |= true << 46;
		else this._entityFlags &= ~(true << 46);
		return value;
	}

	get dancing() {
		return ((this.entityFlags >>> 48) & 1) === 1;
	}

	set dancing(value) {
		if(value) this._entityFlags |= true << 48;
		else this._entityFlags &= ~(true << 48);
		return value;
	}

	get health() {
		return this._health;
	}

	set health(value) {
		return this._health = value;
	}

	get variant() {
		return this._variant;
	}

	set variant(value) {
		return this._variant = value;
	}

	get color() {
		return this._color;
	}

	set color(value) {
		return this._color = value;
	}

	get nametag() {
		return this._nametag;
	}

	set nametag(value) {
		return this._nametag = value;
	}

	get owner() {
		return this._owner;
	}

	set owner(value) {
		return this._owner = value;
	}

	get target() {
		return this._target;
	}

	set target(value) {
		return this._target = value;
	}

	get air() {
		return this._air;
	}

	set air(value) {
		return this._air = value;
	}

	get potionColor() {
		return this._potionColor;
	}

	set potionColor(value) {
		return this._potionColor = value;
	}

	get potionAmbient() {
		return this._potionAmbient;
	}

	set potionAmbient(value) {
		return this._potionAmbient = value;
	}

	get hurtTime() {
		return this._hurtTime;
	}

	set hurtTime(value) {
		return this._hurtTime = value;
	}

	get hurtDirection() {
		return this._hurtDirection;
	}

	set hurtDirection(value) {
		return this._hurtDirection = value;
	}

	get paddleTimeLeft() {
		return this._paddleTimeLeft;
	}

	set paddleTimeLeft(value) {
		return this._paddleTimeLeft = value;
	}

	get paddleTimeRight() {
		return this._paddleTimeRight;
	}

	set paddleTimeRight(value) {
		return this._paddleTimeRight = value;
	}

	get experienceCount() {
		return this._experienceCount;
	}

	set experienceCount(value) {
		return this._experienceCount = value;
	}

	get minecartBlock() {
		return this._minecartBlock;
	}

	set minecartBlock(value) {
		return this._minecartBlock = value;
	}

	get minecartOffset() {
		return this._minecartOffset;
	}

	set minecartOffset(value) {
		return this._minecartOffset = value;
	}

	get minecartHasBlock() {
		return this._minecartHasBlock;
	}

	set minecartHasBlock(value) {
		return this._minecartHasBlock = value;
	}

	get endermanItemId() {
		return this._endermanItemId;
	}

	set endermanItemId(value) {
		return this._endermanItemId = value;
	}

	get endermanItemDamage() {
		return this._endermanItemDamage;
	}

	set endermanItemDamage(value) {
		return this._endermanItemDamage = value;
	}

	get age() {
		return this._age;
	}

	set age(value) {
		return this._age = value;
	}

	get playerFlags() {
		return this._playerFlags;
	}

	set playerFlags(value) {
		return this._playerFlags = value;
	}

	get asleep() {
		return ((this.playerFlags >>> 1) & 1) === 1;
	}

	set asleep(value) {
		if(value) this._playerFlags |= true << 1;
		else this._playerFlags &= ~(true << 1);
		return value;
	}

	get playerIndex() {
		return this._playerIndex;
	}

	set playerIndex(value) {
		return this._playerIndex = value;
	}

	get bedPosition() {
		return this._bedPosition;
	}

	set bedPosition(value) {
		return this._bedPosition = value;
	}

	get fireballPowerX() {
		return this._fireballPowerX;
	}

	set fireballPowerX(value) {
		return this._fireballPowerX = value;
	}

	get fireballPowerY() {
		return this._fireballPowerY;
	}

	set fireballPowerY(value) {
		return this._fireballPowerY = value;
	}

	get fireballPowerZ() {
		return this._fireballPowerZ;
	}

	set fireballPowerZ(value) {
		return this._fireballPowerZ = value;
	}

	get potionAuxValue() {
		return this._potionAuxValue;
	}

	set potionAuxValue(value) {
		return this._potionAuxValue = value;
	}

	get leadHolder() {
		return this._leadHolder;
	}

	set leadHolder(value) {
		return this._leadHolder = value;
	}

	get scale() {
		return this._scale;
	}

	set scale(value) {
		return this._scale = value;
	}

	get interactiveTag() {
		return this._interactiveTag;
	}

	set interactiveTag(value) {
		return this._interactiveTag = value;
	}

	get npcId() {
		return this._npcId;
	}

	set npcId(value) {
		return this._npcId = value;
	}

	get interactiveTagUrl() {
		return this._interactiveTagUrl;
	}

	set interactiveTagUrl(value) {
		return this._interactiveTagUrl = value;
	}

	get maxAir() {
		return this._maxAir;
	}

	set maxAir(value) {
		return this._maxAir = value;
	}

	get markVariant() {
		return this._markVariant;
	}

	set markVariant(value) {
		return this._markVariant = value;
	}

	get blockTarget() {
		return this._blockTarget;
	}

	set blockTarget(value) {
		return this._blockTarget = value;
	}

	get invulnerableTime() {
		return this._invulnerableTime;
	}

	set invulnerableTime(value) {
		return this._invulnerableTime = value;
	}

	get centerHeadTarget() {
		return this._centerHeadTarget;
	}

	set centerHeadTarget(value) {
		return this._centerHeadTarget = value;
	}

	get leftHeadTarget() {
		return this._leftHeadTarget;
	}

	set leftHeadTarget(value) {
		return this._leftHeadTarget = value;
	}

	get rightHeadTarget() {
		return this._rightHeadTarget;
	}

	set rightHeadTarget(value) {
		return this._rightHeadTarget = value;
	}

	get boundingBoxWidth() {
		return this._boundingBoxWidth;
	}

	set boundingBoxWidth(value) {
		return this._boundingBoxWidth = value;
	}

	get boundingBoxHeight() {
		return this._boundingBoxHeight;
	}

	set boundingBoxHeight(value) {
		return this._boundingBoxHeight = value;
	}

	get fuseLength() {
		return this._fuseLength;
	}

	set fuseLength(value) {
		return this._fuseLength = value;
	}

	get riderSeatPosition() {
		return this._riderSeatPosition;
	}

	set riderSeatPosition(value) {
		return this._riderSeatPosition = value;
	}

	get riderRotationLocked() {
		return this._riderRotationLocked;
	}

	set riderRotationLocked(value) {
		return this._riderRotationLocked = value;
	}

	get riderMaxRotation() {
		return this._riderMaxRotation;
	}

	set riderMaxRotation(value) {
		return this._riderMaxRotation = value;
	}

	get riderMinRotation() {
		return this._riderMinRotation;
	}

	set riderMinRotation(value) {
		return this._riderMinRotation = value;
	}

	get areaEffectCloudRadius() {
		return this._areaEffectCloudRadius;
	}

	set areaEffectCloudRadius(value) {
		return this._areaEffectCloudRadius = value;
	}

	get areaEffectCloudWaiting() {
		return this._areaEffectCloudWaiting;
	}

	set areaEffectCloudWaiting(value) {
		return this._areaEffectCloudWaiting = value;
	}

	get areaEffectCloudParticle() {
		return this._areaEffectCloudParticle;
	}

	set areaEffectCloudParticle(value) {
		return this._areaEffectCloudParticle = value;
	}

	get shulkerPeakHeight() {
		return this._shulkerPeakHeight;
	}

	set shulkerPeakHeight(value) {
		return this._shulkerPeakHeight = value;
	}

	get shulkerDirection() {
		return this._shulkerDirection;
	}

	set shulkerDirection(value) {
		return this._shulkerDirection = value;
	}

	get shulkerAttachment() {
		return this._shulkerAttachment;
	}

	set shulkerAttachment(value) {
		return this._shulkerAttachment = value;
	}

	get tradingPlayer() {
		return this._tradingPlayer;
	}

	set tradingPlayer(value) {
		return this._tradingPlayer = value;
	}

	get commandBlockCommand() {
		return this._commandBlockCommand;
	}

	set commandBlockCommand(value) {
		return this._commandBlockCommand = value;
	}

	get commandBlockLastOutput() {
		return this._commandBlockLastOutput;
	}

	set commandBlockLastOutput(value) {
		return this._commandBlockLastOutput = value;
	}

	get commandBlockTrackOutput() {
		return this._commandBlockTrackOutput;
	}

	set commandBlockTrackOutput(value) {
		return this._commandBlockTrackOutput = value;
	}

	get controllingRiderSeatNumber() {
		return this._controllingRiderSeatNumber;
	}

	set controllingRiderSeatNumber(value) {
		return this._controllingRiderSeatNumber = value;
	}

	get strength() {
		return this._strength;
	}

	set strength(value) {
		return this._strength = value;
	}

	get maxStrength() {
		return this._maxStrength;
	}

	set maxStrength(value) {
		return this._maxStrength = value;
	}

	encode() {
		this._buffer = [];
		var length = 3;
		{
			this.writeVaruint(0);
			this.writeVaruint(7);
			this.writeVarlong(this._entityFlags);
		}
		if(this._health !== undefined) {
			length++;
			this.writeVaruint(1);
			this.writeVaruint(2);
			this.writeVarint(this._health);
		}
		if(this._variant !== undefined) {
			length++;
			this.writeVaruint(2);
			this.writeVaruint(2);
			this.writeVarint(this._variant);
		}
		if(this._color !== undefined) {
			length++;
			this.writeVaruint(3);
			this.writeVaruint(0);
			this.writeBigEndianByte(this._color);
		}
		if(this._nametag !== undefined) {
			length++;
			this.writeVaruint(4);
			this.writeVaruint(4);
			var dhc5bfzr=this.encodeString(this._nametag); this.writeVaruint(dhc5bfzr.length); this.writeBytes(dhc5bfzr);
		}
		if(this._owner !== undefined) {
			length++;
			this.writeVaruint(5);
			this.writeVaruint(7);
			this.writeVarlong(this._owner);
		}
		if(this._target !== undefined) {
			length++;
			this.writeVaruint(6);
			this.writeVaruint(7);
			this.writeVarlong(this._target);
		}
		{
			this.writeVaruint(7);
			this.writeVaruint(1);
			this.writeLittleEndianShort(this._air);
		}
		if(this._potionColor !== undefined) {
			length++;
			this.writeVaruint(8);
			this.writeVaruint(2);
			this.writeVarint(this._potionColor);
		}
		if(this._potionAmbient !== undefined) {
			length++;
			this.writeVaruint(9);
			this.writeVaruint(0);
			this.writeBigEndianByte(this._potionAmbient);
		}
		if(this._hurtTime !== undefined) {
			length++;
			this.writeVaruint(11);
			this.writeVaruint(2);
			this.writeVarint(this._hurtTime);
		}
		if(this._hurtDirection !== undefined) {
			length++;
			this.writeVaruint(12);
			this.writeVaruint(2);
			this.writeVarint(this._hurtDirection);
		}
		if(this._paddleTimeLeft !== undefined) {
			length++;
			this.writeVaruint(13);
			this.writeVaruint(3);
			this.writeLittleEndianFloat(this._paddleTimeLeft);
		}
		if(this._paddleTimeRight !== undefined) {
			length++;
			this.writeVaruint(14);
			this.writeVaruint(3);
			this.writeLittleEndianFloat(this._paddleTimeRight);
		}
		if(this._experienceCount !== undefined) {
			length++;
			this.writeVaruint(15);
			this.writeVaruint(2);
			this.writeVarint(this._experienceCount);
		}
		if(this._minecartBlock !== undefined) {
			length++;
			this.writeVaruint(16);
			this.writeVaruint(2);
			this.writeVarint(this._minecartBlock);
		}
		if(this._minecartOffset !== undefined) {
			length++;
			this.writeVaruint(17);
			this.writeVaruint(2);
			this.writeVarint(this._minecartOffset);
		}
		if(this._minecartHasBlock !== undefined) {
			length++;
			this.writeVaruint(18);
			this.writeVaruint(0);
			this.writeBigEndianByte(this._minecartHasBlock);
		}
		if(this._endermanItemId !== undefined) {
			length++;
			this.writeVaruint(23);
			this.writeVaruint(1);
			this.writeLittleEndianShort(this._endermanItemId);
		}
		if(this._endermanItemDamage !== undefined) {
			length++;
			this.writeVaruint(24);
			this.writeVaruint(1);
			this.writeLittleEndianShort(this._endermanItemDamage);
		}
		if(this._age !== undefined) {
			length++;
			this.writeVaruint(25);
			this.writeVaruint(1);
			this.writeLittleEndianShort(this._age);
		}
		if(this._playerFlags !== undefined) {
			length++;
			this.writeVaruint(27);
			this.writeVaruint(0);
			this.writeBigEndianByte(this._playerFlags);
		}
		if(this._playerIndex !== undefined) {
			length++;
			this.writeVaruint(28);
			this.writeVaruint(2);
			this.writeVarint(this._playerIndex);
		}
		if(this._bedPosition !== undefined) {
			length++;
			this.writeVaruint(29);
			this.writeVaruint(6);
			this.writeVarint(this._bedPosition.x); this.writeVarint(this._bedPosition.y); this.writeVarint(this._bedPosition.z);
		}
		if(this._fireballPowerX !== undefined) {
			length++;
			this.writeVaruint(30);
			this.writeVaruint(3);
			this.writeLittleEndianFloat(this._fireballPowerX);
		}
		if(this._fireballPowerY !== undefined) {
			length++;
			this.writeVaruint(31);
			this.writeVaruint(3);
			this.writeLittleEndianFloat(this._fireballPowerY);
		}
		if(this._fireballPowerZ !== undefined) {
			length++;
			this.writeVaruint(32);
			this.writeVaruint(3);
			this.writeLittleEndianFloat(this._fireballPowerZ);
		}
		if(this._potionAuxValue !== undefined) {
			length++;
			this.writeVaruint(37);
			this.writeVaruint(1);
			this.writeLittleEndianShort(this._potionAuxValue);
		}
		{
			this.writeVaruint(38);
			this.writeVaruint(7);
			this.writeVarlong(this._leadHolder);
		}
		if(this._scale !== undefined) {
			length++;
			this.writeVaruint(39);
			this.writeVaruint(3);
			this.writeLittleEndianFloat(this._scale);
		}
		if(this._interactiveTag !== undefined) {
			length++;
			this.writeVaruint(40);
			this.writeVaruint(4);
			var dhc5a5zj=this.encodeString(this._interactiveTag); this.writeVaruint(dhc5a5zj.length); this.writeBytes(dhc5a5zj);
		}
		if(this._npcId !== undefined) {
			length++;
			this.writeVaruint(41);
			this.writeVaruint(4);
			var dhc5bbsq=this.encodeString(this._npcId); this.writeVaruint(dhc5bbsq.length); this.writeBytes(dhc5bbsq);
		}
		if(this._interactiveTagUrl !== undefined) {
			length++;
			this.writeVaruint(42);
			this.writeVaruint(4);
			var dhc5a5zj=this.encodeString(this._interactiveTagUrl); this.writeVaruint(dhc5a5zj.length); this.writeBytes(dhc5a5zj);
		}
		if(this._maxAir !== undefined) {
			length++;
			this.writeVaruint(43);
			this.writeVaruint(1);
			this.writeLittleEndianShort(this._maxAir);
		}
		if(this._markVariant !== undefined) {
			length++;
			this.writeVaruint(44);
			this.writeVaruint(2);
			this.writeVarint(this._markVariant);
		}
		if(this._blockTarget !== undefined) {
			length++;
			this.writeVaruint(48);
			this.writeVaruint(6);
			this.writeVarint(this._blockTarget.x); this.writeVarint(this._blockTarget.y); this.writeVarint(this._blockTarget.z);
		}
		if(this._invulnerableTime !== undefined) {
			length++;
			this.writeVaruint(49);
			this.writeVaruint(2);
			this.writeVarint(this._invulnerableTime);
		}
		if(this._centerHeadTarget !== undefined) {
			length++;
			this.writeVaruint(50);
			this.writeVaruint(7);
			this.writeVarlong(this._centerHeadTarget);
		}
		if(this._leftHeadTarget !== undefined) {
			length++;
			this.writeVaruint(51);
			this.writeVaruint(7);
			this.writeVarlong(this._leftHeadTarget);
		}
		if(this._rightHeadTarget !== undefined) {
			length++;
			this.writeVaruint(52);
			this.writeVaruint(7);
			this.writeVarlong(this._rightHeadTarget);
		}
		if(this._boundingBoxWidth !== undefined) {
			length++;
			this.writeVaruint(54);
			this.writeVaruint(3);
			this.writeLittleEndianFloat(this._boundingBoxWidth);
		}
		if(this._boundingBoxHeight !== undefined) {
			length++;
			this.writeVaruint(55);
			this.writeVaruint(3);
			this.writeLittleEndianFloat(this._boundingBoxHeight);
		}
		if(this._fuseLength !== undefined) {
			length++;
			this.writeVaruint(56);
			this.writeVaruint(2);
			this.writeVarint(this._fuseLength);
		}
		if(this._riderSeatPosition !== undefined) {
			length++;
			this.writeVaruint(57);
			this.writeVaruint(8);
			this.writeLittleEndianFloat(this._riderSeatPosition.x); this.writeLittleEndianFloat(this._riderSeatPosition.y); this.writeLittleEndianFloat(this._riderSeatPosition.z);
		}
		if(this._riderRotationLocked !== undefined) {
			length++;
			this.writeVaruint(58);
			this.writeVaruint(0);
			this.writeBigEndianByte(this._riderRotationLocked);
		}
		if(this._riderMaxRotation !== undefined) {
			length++;
			this.writeVaruint(59);
			this.writeVaruint(3);
			this.writeLittleEndianFloat(this._riderMaxRotation);
		}
		if(this._riderMinRotation !== undefined) {
			length++;
			this.writeVaruint(60);
			this.writeVaruint(3);
			this.writeLittleEndianFloat(this._riderMinRotation);
		}
		if(this._areaEffectCloudRadius !== undefined) {
			length++;
			this.writeVaruint(61);
			this.writeVaruint(3);
			this.writeLittleEndianFloat(this._areaEffectCloudRadius);
		}
		if(this._areaEffectCloudWaiting !== undefined) {
			length++;
			this.writeVaruint(62);
			this.writeVaruint(2);
			this.writeVarint(this._areaEffectCloudWaiting);
		}
		if(this._areaEffectCloudParticle !== undefined) {
			length++;
			this.writeVaruint(63);
			this.writeVaruint(2);
			this.writeVarint(this._areaEffectCloudParticle);
		}
		if(this._shulkerPeakHeight !== undefined) {
			length++;
			this.writeVaruint(64);
			this.writeVaruint(2);
			this.writeVarint(this._shulkerPeakHeight);
		}
		if(this._shulkerDirection !== undefined) {
			length++;
			this.writeVaruint(65);
			this.writeVaruint(0);
			this.writeBigEndianByte(this._shulkerDirection);
		}
		if(this._shulkerAttachment !== undefined) {
			length++;
			this.writeVaruint(67);
			this.writeVaruint(6);
			this.writeVarint(this._shulkerAttachment.x); this.writeVarint(this._shulkerAttachment.y); this.writeVarint(this._shulkerAttachment.z);
		}
		if(this._tradingPlayer !== undefined) {
			length++;
			this.writeVaruint(68);
			this.writeVaruint(7);
			this.writeVarlong(this._tradingPlayer);
		}
		if(this._commandBlockCommand !== undefined) {
			length++;
			this.writeVaruint(71);
			this.writeVaruint(4);
			var dhc5y9bf=this.encodeString(this._commandBlockCommand); this.writeVaruint(dhc5y9bf.length); this.writeBytes(dhc5y9bf);
		}
		if(this._commandBlockLastOutput !== undefined) {
			length++;
			this.writeVaruint(72);
			this.writeVaruint(4);
			var dhc5y9bf=this.encodeString(this._commandBlockLastOutput); this.writeVaruint(dhc5y9bf.length); this.writeBytes(dhc5y9bf);
		}
		if(this._commandBlockTrackOutput !== undefined) {
			length++;
			this.writeVaruint(73);
			this.writeVaruint(4);
			var dhc5y9bf=this.encodeString(this._commandBlockTrackOutput); this.writeVaruint(dhc5y9bf.length); this.writeBytes(dhc5y9bf);
		}
		if(this._controllingRiderSeatNumber !== undefined) {
			length++;
			this.writeVaruint(74);
			this.writeVaruint(0);
			this.writeBigEndianByte(this._controllingRiderSeatNumber);
		}
		if(this._strength !== undefined) {
			length++;
			this.writeVaruint(75);
			this.writeVaruint(2);
			this.writeVarint(this._strength);
		}
		if(this._maxStrength !== undefined) {
			length++;
			this.writeVaruint(76);
			this.writeVaruint(2);
			this.writeVarint(this._maxStrength);
		}
		var buffer = this._buffer;
		this._buffer = [];
		this.writeVaruint(length);
		this.writeBytes(buffer);
		return new Uint8Array(this._buffer);
	}

	decode(buffer) {
		this._buffer = Array.from(buffer);
		var result = [];
		var metadata;
		var length=this.readVaruint();
		while(length-- > 0) {
			metadata=this.readBigEndianByte();
			switch(this.readBigEndianByte()) {
				case 0:
					var _0;
					_0=this.readBigEndianByte();
					result.push({id:0,value:_0});
					break;
				case 1:
					var _1;
					_1=this.readLittleEndianShort();
					result.push({id:1,value:_1});
					break;
				case 2:
					var _2;
					_2=this.readVarint();
					result.push({id:2,value:_2});
					break;
				case 3:
					var _3;
					_3=this.readLittleEndianFloat();
					result.push({id:3,value:_3});
					break;
				case 4:
					var _4;
					_4=this.decodeString(this.readBytes(this.readVaruint()));
					result.push({id:4,value:_4});
					break;
				case 5:
					var _5;
					_5=Types.Slot.fromBuffer(this._buffer); this._buffer=_5._buffer;
					result.push({id:5,value:_5});
					break;
				case 6:
					var _6;
					_6={}; _6.x=this.readVarint(); _6.y=this.readVarint(); _6.z=this.readVarint();
					result.push({id:6,value:_6});
					break;
				case 7:
					var _7;
					_7=this.readVarlong();
					result.push({id:7,value:_7});
					break;
				case 8:
					var _8;
					_8={}; _8.x=this.readLittleEndianFloat(); _8.y=this.readLittleEndianFloat(); _8.z=this.readLittleEndianFloat();
					result.push({id:8,value:_8});
					break;
				default: break;
			}
		}
		this.decodeResult = result;
		return this;
	}

	static fromBuffer(buffer) {
		return new Metadata().decode(buffer);
	}
}