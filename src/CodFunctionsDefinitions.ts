import { CodFunction } from "./CodFunction";

export let defs: Array<CodFunction> = new Array<CodFunction>();

defs.push(new CodFunction({
    name: `AimAtPos`,
    desc: `Sets the actor to aim at the given point. Returns the blend time of the aim`,
    example: `aimTime = self AimAtPos (targetPoint);`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `aim at point`,
            desc: `The point to aim at`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AllowedStances`,
    desc: `Sets the list of the actor's allowed stances.`,
    example: `self AllowedStances( "crouch", "prone" );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `stance`,
            desc: `A stance, can be 'prone', 'crouch', 'stand'. Any number of stances may be added`,
            type: `string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AnimCustom`,
    desc: `Sets the anim script for this actor.`,
    example: `self AnimCustom( animscripts\scripted\stalingrad_cover_crouch::main );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `arg1`,
            desc: `The script name to run`,
            type: `const string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AnimMode`,
    desc: `Set the way that animation deltas are interpreted by the game engine`,
    example: `self AnimMode( "gravity" );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `mode`,
            desc: `which animmode to use.  Must be 'gravity', 'nogravity', 'angle_deltas', 'zonly_physics', 'nophysics', 'none'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `BeginPrediction`,
    desc: `Begin actor physics prediction.`,
    example: `self BeginPrediction();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `CanAttackEnemyNode`,
    desc: `Checks if this actor can attack its enemies node.`,
    example: `self CanAttackEnemyNode();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `CanSee`,
    desc: `Check to see if the actor can see the given entity.`,
    example: `if( self CanSee( player ) )`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `target`,
            desc: `The entity to check`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `CanShoot`,
    desc: `Check to see if the actor can shoot the given position.`,
    example: `canShoot = self CanShoot( eye, offset );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `shoot at position`,
            desc: `The position to shoot at`,
            type: `vector`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `offset from gun`,
            desc: `The offset from the gun muzzle from which to calculate collision`,
            type: `vector`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `CanUseTurret`,
    desc: `Check whether this actor can use this turret`,
    example: `self CanUseTurret();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `turret`,
            desc: `A turret entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `CheckCoverExitPosWithPath`,
    desc: `Check if an exit pos is valid with regard to the AI path.`,
    example: `soldier CheckCoverExitPosWithPath( exitPos );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `exit pos`,
            desc: `the exit animation end position`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `CheckGrenadeLaunch`,
    desc: `Checks whether the actor can launch a grenade at his target. If he can't then result will be undefined, otherwise the result is the resultant velocity vector`,
    example: `throwvel = self CheckGrenadeLaunch( offset );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `barrel offset`,
            desc: `the estimated offset of the grenade launcher barrel`,
            type: `vector`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `CheckGrenadeLaunchPos`,
    desc: `Checks whether the actor can throw a grenade at a given position. If he can't then result will be undefined, otherwise the result is the resultant velocity vector`,
    example: `throwvel = self CheckGrenadeLaunchPos( offset, targetPos );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `barrel offset`,
            desc: `the estimated offset of the grenade launcher barrel`,
            type: `vector`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `targetpos`,
            desc: `The target position`,
            type: `vector`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `CheckGrenadeThrow`,
    desc: `Checks whether the actor can throw a grenade at his target. If he can't then result will be undefined, otherwise the result is the resultant velocity vector`,
    example: `throwvel = self CheckGrenadeThrow( armOffset, "min energy", 0 );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `hand offset`,
            desc: `the estimated offset of the hand for the throw`,
            type: `vector`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `method`,
            desc: `The grenade toss method. Can be 'min energy', 'min time', and 'max tune'`,
            type: `string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `random range`,
            desc: `random range from target position to throw at`,
            type: `float`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `CheckGrenadeThrowPos`,
    desc: `Checks whether the actor can throw a grenade at a given position. If he can't then result will be undefined, otherwise the result is the resultant velocity vector`,
    example: `throwvel = self CheckGrenadeThrowPos( armOffset, "min energy", targetPos );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `hand offset`,
            desc: `the estimated offset of the hand for the throw`,
            type: `vector`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `method`,
            desc: `The grenade toss method. Can be 'min energy', 'min time', and 'max tune'`,
            type: `vector`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `targetpos`,
            desc: `The target position, should be at ground level of potential target`,
            type: `vector`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `CheckProne`,
    desc: `Returns true when a character can go prone at the specified position. Specifically setup for use by AI characters.`,
    example: `canFitProne = self CheckProne( origin, yaw, alreadyProne );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `position`,
            desc: `The position of the prone character`,
            type: `vector`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `yaw`,
            desc: `The world yaw in degrees`,
            type: `float`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `is prone`,
            desc: `Flag if the character is already prone`,
            type: `bool`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ClearEnemy`,
    desc: `Clear the actor's current enemy entity.`,
    example: `self ClearEnemy()`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `ClearEntityTarget`,
    desc: `Clears an AI's entity target.`,
    example: `self ClearEntityTarget( vehicle_entity )`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `ClearFixedNodeSafeVolume`,
    desc: `Clears this actor's fixed node safe volume.`,
    example: `self ClearFixedNodeSafeVolume();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `ClearGoalVolume`,
    desc: `Clears this actor's goal volume.`,
    example: `self ClearGoalVolume();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `clearPitchOrient`,
    desc: `Clear pitch orientation`,
    example: `self clearPitchOrient()`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `ClearPotentialThreat`,
    desc: `Clear the potential threat direction. See SetPotentialThreat for more info on potential threats`,
    example: `self ClearPotentialThreat();`,
    callOn: `<entity>`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `ConnectPaths`,
    desc: `Connects the paths that intersect with the entity. If the entity is a script_brushmodel then it must have DYNAMICPATH set to connect paths.`,
    example: `vehicle ConnectPaths();`,
    callOn: `<entity> A dynamic blocking entity`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `A dynamic blocking entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `DisconnectPaths`,
    desc: `Disconnects the paths that intersect with the entity. If the entity is a script_brushmodel then it must have DYNAMICPATH set to disconnect paths.`,
    example: `level.ArmoredCar DisconnectPaths();`,
    callOn: `<entity> A dynamic blocking entity`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `A dynamic blocking entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `DropWeapon`,
    desc: `Drop the actor's weapon`,
    example: `self DropWeapon( self.weapon, self.anim_gunHand, throwVel );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `weapon name`,
            desc: `The name of the weapon`,
            type: `string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `hand`,
            desc: `The weapon hand. Can be either "left" or "right"`,
            type: `string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `throw speed`,
            desc: `The speed that the weapon is thrown at`,
            type: `float`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `DumpHistory`,
    desc: `Dumps the actor's history to a bug report.`,
    example: `self DumpHistory();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `EndPrediction`,
    desc: `End actor physics prediction.`,
    example: `self EndPrediction();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `EndLocationSelection`,
    desc: `Causes the player to leave location selection mode. Works with beginlocationselection().`,
    example: `self EndLocationSelection();`,
    callOn: `A Player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `ExitProne`,
    desc: `Set the actor to exit the prone position.`,
    example: `self ExitProne( 1.0 );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `interpolation time`,
            desc: `Time to exit prone in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `FindBestCoverNode`,
    desc: `Find the best cover node for a given NPC given his state.`,
    example: `self FindBestCoverNode();`,
    callOn: `<actor>`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `FindCoverNode`,
    desc: `Finds a valid cover node for the character.`,
    example: `guy FindCoverNode();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `FindReacquireDirectPath`,
    desc: `Finds a path directly to the enemy. Call ReacquireMove to use the path.`,
    example: ``,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `ignore suppression`,
            desc: `Whether to ignore suppression when looking for a path. True makes a success more likely but may result in a more dangerous path`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `FindReacquireNode`,
    desc: `Finds a reacquire node when exposed.`,
    example: `guy FindReacquireNode();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `FindReacquireProximatePath`,
    desc: `Finds a path to a point that can see the enemy without leaving goal. Call ReacquireMove to use the path.`,
    example: ``,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `ignore suppression`,
            desc: `Whether to ignore suppression when looking for a path. True makes a success more likely but may result in a more dangerous path`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `FireGrenadeLauncher`,
    desc: `Use the grenadelauncher. checkgrenadelaunchpos or checkgrenadelaunch must be called first.`,
    example: `self FireGrenadeLauncher( tag );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `barrel tag`,
            desc: `barrel tag to fire from`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `FlagEnemyUnattackable`,
    desc: `Set this actor not to attack its current enemy.`,
    example: ``,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetAnglesToLikelyEnemyPath`,
    desc: `Get the angles towards the direction an enemy is most likely to appear. Returns undefined if a good guess can't be made.`,
    example: `self GetAnglesToLikelyEnemyPath();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetCoverNode`,
    desc: `Gets this actor's cover node.`,
    example: `guy GetCoverNode();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetFixedNodeSafeVolume`,
    desc: `Get this actor's fixed node safe volume.`,
    example: `volume = self GetFixedNodeSafeVolume();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetFlashBangedStrength`,
    desc: `Retrieves how strongly the actor was initially hit by a flashbang. 1.0 is full strength, 0.0 is none at all.`,
    example: `flashedPercent = self GetFlashBangedStrength()`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetGoalVolume`,
    desc: `Get this actor's goal volume.`,
    example: `goalVolume = self GetGoalVolume();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetGroundEntType`,
    desc: `Get the entity type of the 'ground' that the actor is on.`,
    example: `self GetGroundEntType();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetHitEntType`,
    desc: `Get the type of entity that the actor has hit. Can be 'hit', 'obstacle' or 'world'.`,
    example: `self GetHitEntType();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetHitYaw`,
    desc: `Get the direction in degrees that the player has hit an obstacle at. Returns an error if nothing was hit.`,
    example: `self GetHitYaw();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetMotionAngle`,
    desc: `Get the motion angle in degrees for this actor.`,
    example: `self GetMotionAngle();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetNegotiationEndNode`,
    desc: `Gets the end negotiation node for this actor`,
    example: `self GetNegotiationEndNode();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetNegotiationStartNode`,
    desc: `Gets the next negotiation node for this actor`,
    example: `self GetNegotiationStartNode();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetReacquireNode`,
    desc: `Gets the reacquire node of this actor.`,
    example: `guy GetReacquireNode();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetTurret`,
    desc: `Get the turret that this actor is using.`,
    example: `turret = self GetTurret();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsDeflected`,
    desc: `Check if the actor has been deflected.`,
    example: `self IsDeflected();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsInGoal`,
    desc: `Determine whether a given point is in the actor's current goal area`,
    example: `if ( ai IsInGoal( node ) )`,
    callOn: `<actor> The actor whose goal you would like to check.`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `The actor whose goal you would like to check.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `point`,
            desc: `which node to check`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsKnownEnemyInRadius`,
    desc: `Checks if there is a known enemy in a radius for an AI.`,
    example: `if ( self IsKnownEnemyInRadius( pos, radius ) ) ...`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `position`,
            desc: `center of radius to check`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `radius`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsKnownEnemyInVolume`,
    desc: `Checks if there is a known enemy in a volume for an AI.`,
    example: ``,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `volume`,
            desc: `volume entity to check in`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsMoveSuppressed`,
    desc: `Checks whether this actor is in a suppressed state ( blocked by friendly fire ).`,
    example: `while ( self IsMoveSuppressed() )...`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsNodeOccupied`,
    desc: `See if anyone has claimed a particular node.`,
    example: `if ( IsNodeOccupied( node ) )`,
    callOn: ``,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `node`,
            desc: `which node to check`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsPathDirect`,
    desc: `Check whether the actor's current path is direct`,
    example: `self IsPathDirect();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsStanceAllowed`,
    desc: `Checks whether this actor can go to the given stance.`,
    example: `if ( self IsStanceAllowed( "stand" ) )...`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `stance`,
            desc: `A stance, can be 'prone', 'crouch', 'stand'`,
            type: `string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsSuppressed`,
    desc: `Checks whether this actor is in a suppressed state ( under fire ).`,
    example: `while ( self IsSuppressed() )...`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsSuppressionWaiting`,
    desc: `Checks whether this actor is still doing suppression wait.`,
    example: `while ( self IsSuppressionWaiting() )...`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsTurretActive`,
    desc: `Determine whether a given turret is being used by anybody including players and NPCs.`,
    example: `if ( IsTurretActive( turret ) )`,
    callOn: ``,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `which turret to check`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `LerpPosition`,
    desc: `Interpolate an actor's position, and angles.`,
    example: `self LerpPosition( entry['origin'], entry['angles'] );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `origin`,
            desc: `the position to interpolate to`,
            type: `vector`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `angles`,
            desc: `the angles to interpolate to`,
            type: `vector`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `MakeFakeAI`,
    desc: `Create a drone from script model, that can be moved around with simple commands`,
    example: `guy MakeFakeAI();`,
    callOn: `A script_model entity`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `A script_model entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `MayMoveFromPointToPoint`,
    desc: `Check whether the actor can move from a given point to a given point. Does not check friendly fire and in goal radius unlike maymovetopoint`,
    example: `if ( !self MayMoveFromPointToPoint( startPoint endPoint ) )...`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `start`,
            desc: `start position`,
            type: `point`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `end`,
            desc: `end position`,
            type: `point`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `check drop`,
            desc: `checks if the point would cause the AI to drop. Defaults to true`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `MayMoveToPoint`,
    desc: `Check whether the actor can move to a given point.`,
    example: `if ( !self MayMoveToPoint( endPoint ) )...`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `position`,
            desc: `The position that the actor may be able to move to`,
            type: `point`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `check drop`,
            desc: `checks if the point would cause the AI to drop. Defaults to true`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Melee`,
    desc: `Makes this actor melee attack. Returns the entity hit, if any.`,
    example: `guy Melee();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `direction`,
            desc: `direction to attack, if not specified, uses direction to current enemy`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `NearNode`,
    desc: `Determine whether this actor is near to a given path node.`,
    example: `if ( ai NearNode( node ) )...`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `node`,
            desc: `The path node to check`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `OrientMode`,
    desc: `Set the orient mode of this actor.`,
    example: `randAlly OrientMode( "face direction", level.player.origin-randAlly.origin );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `orient mode`,
            desc: `OrientMode must be 'face angle', 'face current', 'face direction', 'face enemy', 'face enemy or motion', 'face goal', 'face motion', 'face point', or 'face default'`,
            type: `const string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `face angle`,
            desc: `The yaw angle to face if orient mode is 'face angle'`,
            type: `float`,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `direction vector`,
            desc: `The direction vector to face if orient mode is 'face direction'`,
            type: `vector`,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `face position`,
            desc: `The point to face if orient mode is 'face point'`,
            type: `vector`,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PickUpGrenade`,
    desc: `Pick up a grenade`,
    example: `self PickUpGrenade();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `PredictAnims`,
    desc: `...`,
    example: `self PredictAnims();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `PredictOriginAndAngles`,
    desc: `Use physics to predict the actor's origin and angles`,
    example: `self PredictOriginAndAngles();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `PushPlayer`,
    desc: `Set whether this character can push the player`,
    example: `level.elder PushPlayer( true );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `can push player`,
            desc: `True if this character can push the player`,
            type: `bool`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ReacquireMove`,
    desc: `Start the reaquire move`,
    example: ``,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `ReacquireStep`,
    desc: `Do side step move to safe place left or right while facing enemy.`,
    example: ``,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `dist`,
            desc: `amount to side step left or right`,
            type: `floating point number`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Scr_ClearAllCorpses`,
    desc: `Removes all AI corpses from the level`,
    example: `clearAllCorpses();`,
    callOn: ``,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `SetAimAnims`,
    desc: `Sets the aim animations for this actor`,
    example: `self SetAimAnims( anims["aim_down"], anims["aim_straight"], anims["aim_up"], anims["shoot_down"], anims["shoot_straight"], anims["shoot_up"] );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `aim low`,
            desc: `The animation to play for the actor aiming low`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `aim level`,
            desc: `The animation to play for the actor aiming straight`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `aim high`,
            desc: `The animation to play for the actor aiming high`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `shoot low`,
            desc: `The animation to play for the actor shooting low`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `shoot level`,
            desc: `The animation to play for the actor shooting straight`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `shoot high`,
            desc: `The animation to play for the actor shooting high`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetEngagementMaxDist`,
    desc: `Sets the max engagement distances used when selecting cover nodes.`,
    example: `self SetEngagementMaxDist( 600, 800 )`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `max dist`,
            desc: `Max distance where the cover node weight begins to fall off`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `max falloff dist`,
            desc: `Max falloff distance where the cover node weight reaches 0.  Must be >= max dist`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetEngagementMinDist`,
    desc: `Sets the min engagement distances used when selecting cover nodes.`,
    example: `self SetEngagementMinDist( 300, 100 )`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `min dist`,
            desc: `Min distance where the cover node weight begins to fall off`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `min falloff dist`,
            desc: `Min falloff distance where the cover node weight reaches 0.  Must be <= min dist`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetEntityTarget`,
    desc: `Set an entity as the AI's target. This is for special cases only. Do not set AI or player targets with this.`,
    example: `self SetEntityTarget( vehicle_entity, 0.7 )`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `entity`,
            desc: `An entity to target`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `threat`,
            desc: `A fraction of maximum possible threat an AI can have. Must be in 0 to 1 range. Defaults to 1`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetFixedNodeSafeVolume`,
    desc: `Set this actor's fixed node safe volume.`,
    example: `self SetFixedNodeSafeVolume( volume );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `volume entity`,
            desc: `The safe volume entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetFlashBanged`,
    desc: `Sets whether an actor is under a flashbang effect.`,
    example: `self SetFlashBanged( true, 0.8 )`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `flashed`,
            desc: `Whether or not the actor is under the affect of a flashbang`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `strength`,
            desc: `If actor is flashed, how severely they were initially affected.  Between 0.0 and 1.0 (full strength)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetFlashbangImmunity`,
    desc: `Sets whether an actor is succeptable to flashbangs.`,
    example: `level.suicideguy SetFlashbangImmunity( true )`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `immune`,
            desc: `If the actor can be affected by flashbangs`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetFriendlyChain`,
    desc: `Sets the friendly chain for the player.`,
    example: `level.player setfriendlychain (getnode ("trench_chain","targetname"));`,
    callOn: `<player>`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `node`,
            desc: `a node on a friendly chain`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetGoalNode`,
    desc: `Set this actor's goal node.`,
    example: `self SetGoalNode( node );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `goal node`,
            desc: `The goal node`,
            type: `node`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetGoalPos`,
    desc: `Set this actor's goal position.`,
    example: `self SetGoalPos( thisMg42.org );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `position`,
            desc: `The goal position`,
            type: `node`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetGoalVolume`,
    desc: `Set this actor's goal volume. This cannot be set if a goal entity is set.`,
    example: `self SetGoalVolume( goal );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `volume entity`,
            desc: `The goal volume entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetLookAt`,
    desc: `Set the actor to exit the prone position.`,
    example: `self SetLookAt( lookTargetPos, self.anim_lookTargetSpeed );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `position`,
            desc: `The point for this actor to look at`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `turn acceleration`,
            desc: `The acceleration to turn the actor's head at`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetLookAtAnimNodes`,
    desc: `Set the animation nodes for this actor for looking at things to the left and right.`,
    example: `self SetLookAtAnimNodes( %look_straight, %look_left, %look_right );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `look straight animation`,
            desc: `The look straight animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `look left animation`,
            desc: `The look left animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `look right animation`,
            desc: `The look rigth animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetLookAtYawLimits`,
    desc: `Set the limits of what this actor can look at.`,
    example: `self SetLookAtYawLimits( lookAnimYawMax, lookYawLimit, blendtime );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `look anim yaw max`,
            desc: `The maximim yaw for the animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `look yaw limit`,
            desc: `The maximim limit for the actual look at`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `blendtime`,
            desc: `The blend time for looking in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetNodePriority`,
    desc: `Enable or disable the priority for this node.`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `node`,
            desc: `A priority allowed node`,
            type: `node`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `enable`,
            desc: `True if this node is enabled`,
            type: `boolean`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetPotentialThreat`,
    desc: `Set the potential threat direction. Potential threat direction is used in evaluating cover nodes.`,
    example: `self SetPotentialThreat( 90 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `dir`,
            desc: `direction of the threat.  This is the angle from which the NPC should expect danger`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetProneAnimNodes`,
    desc: `Set the prone animation nodes, as well as highest and lowest possible aim angles for this character.`,
    example: `self SetProneAnimNodes( -45, 45, %prone_legsdown, %prone_legsstraight, %prone_legsup );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `down angle`,
            desc: `The lowest allowable pitch in degrees for aiming. Must be less than 0`,
            type: `float`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `up angle`,
            desc: `The highest allowable pitch in degrees for aiming. Must be greater than 0`,
            type: `float`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `low prone animation`,
            desc: `The low prone animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `straight prone animation`,
            desc: `The straight prone animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `high prone animation`,
            desc: `The high prone animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetRunToPos`,
    desc: `Override where the actor should run to. This overrides the goal pos and the claimed node.`,
    example: `self SetRunToPos( pos );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `position`,
            desc: `The position for the actor to run to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTalkToSpecies`,
    desc: `Sets the species this AI can share enemy information with.`,
    example: `SetTalkToSpecies( "dog", "human`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `species`,
            desc: `list of species, if not specified, makes this AI talk with no one; use "all" to talk with all species`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTurretAnim`,
    desc: `Set the turret animation for this actor.`,
    example: `self SetTurretAnim( %prone30calgunner_fire );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `turret animation`,
            desc: `The turret animation`,
            type: `animation`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTurretNode`,
    desc: `Set this turretnode to use this turret.`,
    example: `SetTurretNode( node, mg42 );`,
    callOn: ``,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `node`,
            desc: `The turret node to connect to the turret`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `turret`,
            desc: `The turret to connect to the node`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Shoot`,
    desc: `Makes this actor shoot.`,
    example: `guy shoot();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `accuracy modifier`,
            desc: ``,
            type: `floating point number`,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `shoot override vector`,
            desc: `The shoot vector`,
            type: `vector`,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ShootBlank`,
    desc: `Makes this actor shoot a blank.`,
    example: `guy ShootBlank();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `StartCoverArrival`,
    desc: `Runs cover arrival animscript on an actor.`,
    example: `soldier StartCoverArrival( pos, 45 );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `start pos`,
            desc: `the offset to start the arrival animation from`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `yaw angles`,
            desc: `the arrival angle`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `StartScriptedAnim`,
    desc: `Runs an animscript on an actor.`,
    example: `driver startscriptedanim( "germantruck_driver_closedoor", org , angles, driver.closedooranim );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `notify`,
            desc: `The notify to send`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `origin`,
            desc: `The starting position of the anim script`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `angles`,
            desc: `The starting angle of the anim script`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `animation`,
            desc: `The animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `mode`,
            desc: `Valid modes are "normal" and "deathplant"`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `root`,
            desc: `The root animation`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `StartTraverseArrival`,
    desc: `Runs traverse arrival animscript on an actor.`,
    example: `soldier StartTraverseArrival( 45 );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `start pos`,
            desc: `the offset to start the arrival animation from`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `yaw angles`,
            desc: `the arrival angle`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `StopLookAt`,
    desc: `Make this actor stop looking at its current look at target.`,
    example: `self StopLookAt( 1000 );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `turn acceleration`,
            desc: `The turn acceleration`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `StopUseTurret`,
    desc: `Stop using the actor's current turret`,
    example: `self StopUseTurret();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `Teleport`,
    desc: `Teleport the actor to a new position with the given origin and angles.`,
    example: `self Teleport( org, angles );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `position`,
            desc: `The actor's new position`,
            type: `point`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `angles`,
            desc: `The actor's new angles`,
            type: `vector`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ThrowGrenade`,
    desc: `Throw a grenade. CheckGrenadeThrowPos() or CheckGrenadeThrow() must be called first.`,
    example: `self ThrowGrenade();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `TrackScriptState`,
    desc: `Change the script state of the actor, with a reason for the state change. The reason will be added to the history of the AI`,
    example: `self TrackScriptState( entryState , "CoverRightStandStill returned" );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `new state name`,
            desc: `The new state name`,
            type: `const string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `reason`,
            desc: `The reason for the transition`,
            type: `const string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `TraverseMode`,
    desc: `Set the traverse mode of this actor.`,
    example: `self TraverseMode( "nogravity" );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `traverse mode`,
            desc: `Possible traverse modes are 'gravity', 'nogravity', or 'noclip'`,
            type: `const string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `TrimPathtoAttack`,
    desc: `Trims the path to attack.`,
    example: ``,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `UnSetTurretNode`,
    desc: `Unset the turret from this node.`,
    example: `UnSetTurretNode( node, mg42 );`,
    callOn: ``,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `node`,
            desc: `The turret node to disconnect`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `UpdatePlayerSightAccuracy`,
    desc: `Does traces to determine how much of the player is visible if the player is the actor's enemy. Then modifies the actor's accuracy based on the visibilty. Should be called before any shoot volley.`,
    example: `self UpdatePlayerSightAccuracy();`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `UpdateProne`,
    desc: `Set the actor to exit the prone position.`,
    example: `self UpdateProne( %prone_shootfeet_straight45up, %prone_shootfeet_straight45down, 1, 0.05, 1 );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `animation A`,
            desc: `The first animation to lerp between`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `animation B`,
            desc: `The second animation to lerp between`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `goal weight`,
            desc: `The blend amount between the two animations`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `goal time`,
            desc: `The time to lerp to the new blend`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `The animation play rate`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `UseCoverNode`,
    desc: `Tells this actor to use the given cover node. This is invalid if the actor's keepclaimednode flag is set. Returns true or false depending on whether the actor can claim the node.`,
    example: `guy UseCoverNode( covernode );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `path node`,
            desc: `The path node to use as cover`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `UseReacquireNode`,
    desc: `Use the given reacquire node.`,
    example: ``,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `node`,
            desc: `the node to use`,
            type: `path node`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `UseTurret`,
    desc: `Use this turret`,
    example: `self UseTurret( mg42Ent );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `turret`,
            desc: `A turret entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `WithinApproxPathDist`,
    desc: `Check whether the actor is within an approximate distance to his path`,
    example: `self WithinApproxPathDist( distance );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `distance`,
            desc: `The distance to test against`,
            type: `float`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AnimHasNotetrack`,
    desc: `queries the given animation for a note track`,
    example: `if ( IsDefined( facialanim ) &amp;&amp; AnimHasNotetrack( facialanim, "dialogue" ) ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `animation`,
            desc: `an animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `note track`,
            desc: `a constant string with the name of the note track`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AnimRelative`,
    desc: `Runs an animscript on an entity.`,
    example: `driver AnimRelative( "germantruck_driver_closedoor", org , angles, driver.closedooranim );`,
    callOn: `<entity> The entity to run the animscript on`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `The entity to run the animscript on`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `notify`,
            desc: `The notify to send`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `origin`,
            desc: `The starting position of the anim script`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `angles`,
            desc: `The starting angle of the anim script`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `animation`,
            desc: `The animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `mode`,
            desc: `Valid modes are "normal" and "deathplant"`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `root`,
            desc: `The root animation`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AnimScripted`,
    desc: `Runs an animscript on an entity.`,
    example: `driver AnimScripted( "germantruck_driver_closedoor", org , angles, driver.closedooranim );`,
    callOn: `<entity> The entity to run the animscript on`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `The entity to run the animscript on`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `notify`,
            desc: `The notify to send`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `origin`,
            desc: `The starting position of the anim script`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `angles`,
            desc: `The starting angle of the anim script`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `animation`,
            desc: `The animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `mode`,
            desc: `Valid modes are "normal" and "deathplant"`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `root`,
            desc: `The root animation`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ClearAnim`,
    desc: `Sets an animation's goal weight (and the goal weights of all of its descendents) to zero over the specified time.`,
    example: `self ClearAnim( %root, 0);`,
    callOn: `<entity> The entity to clear the animation on.`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `The entity to clear the animation on.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to clear`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `The blending time for the clear`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `DumpAnims`,
    desc: `Writes the anim tree out to the console`,
    example: `self DumpAnims();`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetAngleDelta`,
    desc: `Returns the rotation difference in the given animation`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `anim`,
            desc: `An animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `start time`,
            desc: `The start time as a fraction of the total animation time, from 0 to 1`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `end time`,
            desc: `The end time as a fraction of the total animation time, from 0 to 1`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetAnimAssetType`,
    desc: `Get the animation asset type (delta/relative/additive etc defined in xanim.gdf).`,
    example: `GetAnimAssetType( %walk_and_run_loops )`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `animation`,
            desc: `animation to get asset type of`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetAnimLength`,
    desc: `Gets the length of an animation`,
    example: `cycleTime = GetAnimLength( climbAnim );`,
    callOn: ``,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `animation`,
            desc: `a primitive animation: calling this function on a non-primitive animation will fail`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetAnimTime`,
    desc: `Get the animation time for the given animation.`,
    example: `if ( (self GetAnimTime( %walk_and_run_loops ) ) &lt; 0.5 )`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `animation`,
            desc: `animation to manipulate`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetCycleOriginOffset`,
    desc: `For the given animation cycle and angle set, calculate the final offset of the animation`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `angles`,
            desc: `A set of world angles`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `animation`,
            desc: `The animation to calculate the offset of`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetMoveDelta`,
    desc: `Returns the movement vector difference in the given animation`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `anim`,
            desc: `An animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `start time`,
            desc: `The start time as a fraction of the total animation time, from 0 to 1`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `end time`,
            desc: `The end time as a fraction of the total animation time, from 0 to 1`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetNotetrackTimes`,
    desc: `Gets an array of the times during an animation that the given notetrack occurs. The times returned are fractional (0 to 1).`,
    example: `exitAlignTimes = GetNotetrackTimes( exitAnim, "exit_align" );`,
    callOn: ``,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `animation`,
            desc: `an animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `note track`,
            desc: `a constant string with the name of the note track`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetNumParts`,
    desc: `Gets the number of bones in the xmodel.`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `xmodel`,
            desc: `The model`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetPartName`,
    desc: `Gets the name of a part of a model.`,
    example: `partName = GetPartName( self.hatModel, 0 )`,
    callOn: ``,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `xmodel name`,
            desc: `The name of the model`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `index`,
            desc: `The part index. Must be less than the number of bones in the model`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetStartAngles`,
    desc: `Get the starting angles for an animation, in world coordinates, given its current position, and angles`,
    example: `org1 = GetStartAngles( climborg, climbang, buddyanim1 );`,
    callOn: ``,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `origin`,
            desc: `The current origin of the animation in world coordinates`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `angle`,
            desc: `The current angle set of the animation in world coordinates`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `animation`,
            desc: `The currently running animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetStartOrigin`,
    desc: `Get the starting origin for an animation, in world coordinates, given its current position, and angles`,
    example: `org1 = GetStartOrigin( climborg, climbang, buddyanim1 );`,
    callOn: ``,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `origin`,
            desc: `The current origin of the animation in world coordinates`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `angle`,
            desc: `The current angle set of the animation in world coordinates`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `animation`,
            desc: `The currently running animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetTagAngles`,
    desc: `Gets the angles of a particular tag on this model`,
    example: `leftorg = self GetTagAngles( "tag_wheel_back_left" );`,
    callOn: `<entity> An entity with a model`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity with a model`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `tagname`,
            desc: `The name of the tag`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetTagOrigin`,
    desc: `Gets the origin of a particular tag on this model`,
    example: `leftorg = self GetTagOrigin( "tag_wheel_back_left" );`,
    callOn: `<entity> An entity with a model`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity with a model`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `tagname`,
            desc: `The name of the tag`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetAnim`,
    desc: `SetAnim and all of its variants set the weight of an animation (or a node in the animtree) to a given value over a given time. They also set the speed at which the animation plays. All of the ancestors of the animation will also have their weight set to 1 over the given time so that the animation is visible. Each variant of this function has different behavior depending on the words in the function name:`,
    example: `self SetAnim( %precombatrun1, 1, 0.1, 1 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetAnimKnobAll`,
    desc: `See "SetAnim."`,
    example: `self SetAnimKnobAll( %precombatrun1, %body, 1, 0.1, 1 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `root`,
            desc: `An ancestor of the animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetAnimKnobAllLimited`,
    desc: `See "SetAnim."`,
    example: `self SetAnimKnobAllLimited( %precombatrun1, %body, 1, 0.1, 1 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `root`,
            desc: `An ancestor of the animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetAnimKnobAllLimitedRestart`,
    desc: `See "SetAnim."`,
    example: `self SetAnimKnobAllLimitedRestart( %precombatrun1, %body, 1, 0.1, 1 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `root`,
            desc: `An ancestor of the animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetAnimKnobAllRestart`,
    desc: `See "SetAnim."`,
    example: `self SetAnimKnobAllRestart( %precombatrun1, %body, 1, 0.1, 1 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `root`,
            desc: `An ancestor of the animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetAnimKnobLimited`,
    desc: `See "SetAnim."`,
    example: `self SetAnimKnobLimited( %precombatrun1, 1, 0.1, 1 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetAnimKnobLimitedRestart`,
    desc: `See "SetAnim."`,
    example: `self SetAnimKnobLimitedRestart( %precombatrun1, 1, 0.1, 1 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetAnimKnobRestart`,
    desc: `See "SetAnim."`,
    example: `self SetAnimKnobRestart( %precombatrun1, 1, 0.1, 1 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetAnimLimited`,
    desc: `See "SetAnim."`,
    example: `self SetAnimLimited( %precombatrun1, 1, 0.1, 1 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetAnimLimitedRestart`,
    desc: `See "SetAnim."`,
    example: `self SetAnimLimitedRestart( %precombatrun1, 1, 0.1, 1 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetAnimRestart`,
    desc: `See "SetAnim."`,
    example: `self SetAnimRestart( %precombatrun1, 1, 0.1, 1 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetAnimTime`,
    desc: `set the time of an animation`,
    example: `self SetAnimTime( %stand_aim, 0.3 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `anim`,
            desc: `animation in the tree`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `normalized time between 0 and 1`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetFlaggedAnim`,
    desc: `See "SetAnim."`,
    example: `self SetFlaggedAnim( "runanim", %precombatrun1, 1, 0.1, 1 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `notifyname`,
            desc: `The string to notify notetracks with`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetFlaggedAnimKnob`,
    desc: `See "SetAnim."`,
    example: `self SetFlaggedAnimKnob( "runanim", %precombatrun1, 1, 0.1, 1 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `notifyname`,
            desc: `The string to notify notetracks with`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetFlaggedAnimKnobLimited`,
    desc: `See "SetAnim."`,
    example: `self SetFlaggedAnimKnobLimited( "runanim", %precombatrun1, 1, 0.1, 1 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `notifyname`,
            desc: `The string to notify notetracks with`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetFlaggedAnimKnobLimitedRestart`,
    desc: `See "SetAnim."`,
    example: `self SetFlaggedAnimKnobLimitedRestart( "runanim", %precombatrun1, 1, 0.1, 1 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `notifyname`,
            desc: `The string to notify notetracks with`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetFlaggedAnimKnobRestart`,
    desc: `See "SetAnim."`,
    example: `self SetFlaggedAnimKnobRestart( "runanim", %precombatrun1, 1, 0.1, 1 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `notifyname`,
            desc: `The string to notify notetracks with`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetFlaggedAnimLimited`,
    desc: `See "SetAnim."`,
    example: `self SetFlaggedAnimLimited( "runanim", %precombatrun1, 1, 0.1, 1 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `notifyname`,
            desc: `The string to notify notetracks with`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetFlaggedAnimLimitedRestart`,
    desc: `See "SetAnim."`,
    example: `self SetFlaggedAnimLimitedRestart( "runanim", %precombatrun1, 1, 0.1, 1 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `notifyname`,
            desc: `The string to notify notetracks with`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetFlaggedAnimRestart`,
    desc: `See "SetAnim."`,
    example: `self SetFlaggedAnimRestart( "runanim", %precombatrun1, 1, 0.1, 1 );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `notifyname`,
            desc: `The string to notify notetracks with`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `StopAnimScripted`,
    desc: `Halts animscript on this entity.`,
    example: `self StopAnimScripted()`,
    callOn: `<entity> The entity to stop animscripts on`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `The entity to stop animscripts on`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `StopUseAnimTree`,
    desc: `Stop using the current anim tree`,
    example: `self StopUseAnimTree();`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `UseAnimTree`,
    desc: `Set the animation tree of an entity`,
    example: `self UseAnimTree( #animtree );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `anim tree`,
            desc: `The new anim tree`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `BadPlace_Arc`,
    desc: `Creates a bad place arc. AI will flee this position if they can, and will not go into it if they can avoid it.`,
    example: `BadPlace_Arc( "halftrack_bp", -1, mg42.origin, 1500, 400, (1.00, 0.00, 0.00), 20, 0, "allies" );`,
    callOn: ``,
    returnType: ``,
    module: `BadPlaces`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `name`,
            desc: `The name of the bad place. If name is not "", the bad place can be moved or deleted by using the unique name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `duration`,
            desc: `If duration > 0, the bad place will automatically delete itself after this time.  If duration <= 0, the bad place must have a name and will last until manually deleted`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `origin`,
            desc: `The base position of the bad place`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `radius`,
            desc: `The radius of the bad place`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `height`,
            desc: `The height of the bad place`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `direction`,
            desc: `The direction vector is used to give a reference frame for the left and right angles`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `right angle`,
            desc: `The left angle and right angle are both positive angles (eg, "45, 45" will give a 90 degree arc)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `left angle`,
            desc: `The left angle and right angle are both positive angles (eg, "45, 45" will give a 90 degree arc)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `team`,
            desc: `You must specify at least one team for which this place is bad, but can give several.  The allowed teams are 'axis', 'allies', and 'neutral'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `BadPlace_Brush`,
    desc: `Creates a bad place from a brush entity. AI will flee this position if they can, and will not go into it if they can avoid it.`,
    example: `BadPlace_Brush( "moody", -1, volumeEnt, "axis" );`,
    callOn: ``,
    returnType: ``,
    module: `BadPlaces`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `name`,
            desc: `The name of the bad place. If name is not "", the bad place can be moved or deleted by using the unique name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `duration`,
            desc: `If duration > 0, the bad place will automatically delete itself after this time. If duration <= 0, the bad place must have a name and will last until manually deleted`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `brush entity`,
            desc: `The brush entity representing the bad place`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `team`,
            desc: `You must specify at least one team for which this place is bad, but can give several.  The allowed teams are 'axis', 'allies', and 'neutral'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `BadPlace_Cylinder`,
    desc: `Creates a bad place cylinder. AI will flee this position if they can, and will not go into it if they can avoid it.`,
    example: `BadPlace_Cylinder( "moody", -1, level.moodyfall_origin, 75, 300, "neutral" );`,
    callOn: ``,
    returnType: ``,
    module: `BadPlaces`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `name`,
            desc: `The name of the bad place. If name is not "", the bad place can be moved or deleted by using the unique name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `duration`,
            desc: `If duration > 0, the bad place will automatically delete itself after this time. If duration <= 0, the bad place must have a name and will last until manually deleted`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `origin`,
            desc: `The base position of the bad place`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `radius`,
            desc: `The radius of the bad place`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `height`,
            desc: `The height of the bad place`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `team`,
            desc: `You must specify at least one team for which this place is bad, but can give several.  The allowed teams are 'axis', 'allies', and 'neutral'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `BadPlace_Delete`,
    desc: `Deletes a bad place. It is okay to delete a bad place name that doesn't exist. It is not okay to delete the special name "".`,
    example: `BadPlace_Delete( "bpFlak1" );`,
    callOn: ``,
    returnType: ``,
    module: `BadPlaces`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `bad place identifier`,
            desc: `The bad place to delete`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetClanID`,
    desc: `Return the id of the clan`,
    example: `player GetClanID();`,
    callOn: `Entity`,
    returnType: ``,
    module: `Clans`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: ``,
            desc: `Entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetClanName`,
    desc: `Return the name for the player's clan`,
    example: `player GetClanName();`,
    callOn: `Entity`,
    returnType: ``,
    module: `Clans`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: ``,
            desc: `Entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `AllClientsPrint`,
    desc: `Cause all clients to print the localized version of this string.`,
    example: `AllClientsPrint( "Game Complete" );`,
    callOn: ``,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `string`,
            desc: `the string to print`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AllowSpectateTeam`,
    desc: `Set whether the player can spectate the given team.`,
    example: `self AllowSpectateTeam( "axis", true );`,
    callOn: `A Player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `team`,
            desc: `A string description of the team. Valid teams are 'axis', 'allies', 'none' or 'freelook'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `spectate`,
            desc: `A boolean value describing whether this player can spectate on this team`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Announcement`,
    desc: `Sends an announcement to all clients.`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `string`,
            desc: `The announcement`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Ban`,
    desc: `Bans the specified player.`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `clientnum`,
            desc: `The client number of the player to ban`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `BeginLocationSelection`,
    desc: `Causes the player to begin selecting a location. A map HUD element should be visible for them to see where they're selecting. Works with endlocationselection(). When the user confirms or cancels, they will recieve a notify "confirm_location" or "cancel_location". The former notify contains the location they selected, as a vector.`,
    example: `self BeginLocationSelection( "map_crosshair", 0.1); self waittill("confirm_location", loc );`,
    callOn: `A Player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `location selector`,
            desc: `Name of the material to use as a cursor on the map. Must be precached with precacheLocationSelector()`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `selector size`,
            desc: `The radius of the cursor material in world units. Cannot be larger than the entire south-to-north span of the minimap. If not specified, will be 15% of the south-to-north span of the minimap`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ClientAnnouncement`,
    desc: `Sends an announcement to a single client.`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `clientnum`,
            desc: `The client number that the announcement is sent to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `string`,
            desc: `The announcement`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ClientPrint`,
    desc: `Print a localized version of this string for a given client`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `client`,
            desc: `A client entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `string`,
            desc: `A message to print`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ClonePlayer`,
    desc: `clone the player's model for death animations.`,
    example: `body = self ClonePlayer(deathAnimDuration);`,
    callOn: `A Client`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `death animation duration`,
            desc: `the duration of the death animation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `DisableWeapons`,
    desc: `Disable the player's weapon`,
    example: `level.player DisableWeapons();`,
    callOn: `A Player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `DropItem`,
    desc: `Drop an item with the given item name`,
    example: `self DropItem( current );`,
    callOn: `A Player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `item name`,
            desc: `the name of the item to drop`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `EnableWeapons`,
    desc: `Enable the player's weapons`,
    example: `level.player EnableWeapons();`,
    callOn: `A Player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `EndLocationSelection`,
    desc: `Causes the player to leave location selection mode. Works with beginlocationselection().`,
    example: `self EndLocationSelection();`,
    callOn: `A Player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `ForceViewmodelAnimation`,
    desc: `Forces the viewmodel to play the nightvision pulldown animation for the specified weapon.`,
    example: `level.player ForceViewmodelAnimation( "facemask", "reload" );`,
    callOn: `A Player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `weaponName`,
            desc: `: Name of the weapon to play an animation from`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `animName`,
            desc: `: Name of the animation to play.  Can be "reload", "fire", "nvg_up", or "nvg_down"`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetViewModel`,
    desc: `Get the viewmodel name for the given player`,
    example: `info["viewmodel"] = self GetViewModel();`,
    callOn: `A Player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: ``,
            desc: `A Player`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsMantling`,
    desc: `Return true if the player is mantling, false otherwise.`,
    example: `self IsMantling();`,
    callOn: `A player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `IsOnLadder`,
    desc: `Return true if the player is on a ladder, false otherwise.`,
    example: `self IsOnLadder();`,
    callOn: `A player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `IsPlayerNumber`,
    desc: `Returns true if the passed in int is a valid client number`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entityNumber`,
            desc: `Number to check`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsRagdoll`,
    desc: `Return true if the entity is a ragdoll body, false otherwise.`,
    example: ``,
    callOn: `A player or player corpse`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `IsTalking`,
    desc: `Returns true if the player is talking via voice chat`,
    example: ``,
    callOn: `A player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: ``,
            desc: `A player`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `Kick`,
    desc: `Kicks the specified player.`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `clientnum`,
            desc: `The client number of the player to kick`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `MakeDvarServerInfo`,
    desc: `Flags a dvar with the DVAR_CODINFO flag`,
    example: `MakeDvarServerInfo( "ui_ctf_timelimit", "30" );`,
    callOn: `A player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `dvar name`,
            desc: `The name of the dvar to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `dvar value`,
            desc: `The new value of the dvar`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `NightVisionForceOff`,
    desc: `Clears the player's nightvision state.`,
    example: `level.player NightVisionForceOff();`,
    callOn: `A Player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `SayAll`,
    desc: `Write a client chat message from this client to everybody`,
    example: `self SayAll( saytext );`,
    callOn: `A Player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `message`,
            desc: `A localizable message to send to all players`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SayTeam`,
    desc: `Write a client chat message from this client to everybody on their team`,
    example: `self SayTeam( sayText );`,
    callOn: `A Player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `message`,
            desc: `A localizable message to send to all players on the player's team`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetRank`,
    desc: `Sets the player's rank and prestige level`,
    example: `player SetRank( 1, 2 )`,
    callOn: `A player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `rank id`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `prestige level`,
            desc: ``,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetSpawnWeapon`,
    desc: `Set the weapon that this player will spawn with`,
    example: `self SetSpawnWeapon( "ak47" );`,
    callOn: `A player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The name of the weapon to spawn with`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTeamForTrigger`,
    desc: `Set the team that this trigger will react to`,
    example: `self SetTeamForTrigger( game["attackers"] );`,
    callOn: `A trigger`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `team name`,
            desc: `The name of the team that the trigger will respond to. Must be either 'axis', 'allies' or 'none'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ShowScoreBoard`,
    desc: `Updates the scoreboard data on a given client if they are looking at it.`,
    example: ``,
    callOn: `A Player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: ``,
            desc: `A Player`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `StartRagdoll`,
    desc: `Begin ragdoll physics for this entity. Does nothing if the entity is already a ragdoll.`,
    example: `self StartRagdoll();`,
    callOn: `A player or player corpse`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `rig_index`,
            desc: `Index of the ragdoll rig to use.  Defaults to 0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Suicide`,
    desc: `Kills the player immediately as a suicide`,
    example: `self suicide();`,
    callOn: `A player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: ``,
            desc: `A player`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `UpdateDMScores`,
    desc: `Updates the client's knowledge of scores for himself and the (next) best player in the game. For use in Deathmatch.`,
    example: `player UpdateDMScores()`,
    callOn: `A player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `UpdateScores`,
    desc: `Updates the client's knowledge of team scores`,
    example: `player UpdateScores()`,
    callOn: `A player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: ``,
            desc: `A player`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetCommandFromKey`,
    desc: `Gets the command bound to the key. Applicable values are: "Z","BUTTON_LSTICK","BUTTON_START","Space`,
    example: `command = GetCommandFromKey( "BUTTON_LSTICK" );`,
    callOn: ``,
    returnType: ``,
    module: `Control`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `key`,
            desc: `key name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetKeyBinding`,
    desc: `Gets a key binding. Applicable values are: "+scores","+speed","+forward","+back", "+moveleft","+moveright", "+moveup", "+movedown", "+left", "+right", "+strafe", "+lookup", "+lookdown", "+mlook", "centerview", "toggleads","+melee", "+prone", "lowerstance", "raisestance", "togglecrouch", "toggleprone", "goprone", "gocrouch", "+gostand", "weaponslot primary", "weaponslot primaryb", "+attack", "weapprev", "weapnext", "+activate", "+reload", "+leanleft", "+leanright", "screenshot", "screenshotJPEG",`,
    example: `firekey = GetKeyBinding( "+attack" );`,
    callOn: ``,
    returnType: ``,
    module: `Control`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `key binding`,
            desc: `a key binding name as a string`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `FinishPlayerDamage`,
    desc: `Does damage to a player - usually as part of the damage callback`,
    example: `self FinishPlayerDamage( eInflictor, eAttacker, iDamage, iDFlags, sMeansOfDeath, sWeapon, vPoint, vDir, sHitLoc, psOffsetTime );`,
    callOn: `A client`,
    returnType: ``,
    module: `Damage`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `Inflictor`,
            desc: `The entity that causes the damage.(e.g. a turret)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `Attacker`,
            desc: `The entity that is attacking`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `Damage`,
            desc: `Integer specifying the amount of damage done`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `Damage Flags`,
            desc: `Integer specifying flags that are to be applied to the damage`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `Means Of Death`,
            desc: `Integer specifying the method of death`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `Weapon`,
            desc: `The weapon number of the weapon used to inflict the damage`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `Direction`,
            desc: `The direction of the damage`,
            type: `vector`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `Hit Loc`,
            desc: `The location of the hit`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `Offset Time`,
            desc: `The time offset for the damage`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `RadiusDamage`,
    desc: `Does damage to all damageable objects within a given radius. The amount of damage is linear according to how close the object is to the radius. See also Entity/radiusdamage to specify an entity the damage is coming from.`,
    example: `RadiusDamage( level.player.origin, 500, max, min, attacker );`,
    callOn: ``,
    returnType: ``,
    module: `Damage`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `origin`,
            desc: `The centre of the damage`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `range`,
            desc: `The radius of the damage done`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `max damage`,
            desc: `The maximum damage done. This will be done to objects close to the origin`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `min damage`,
            desc: `The minimum damage done. This will be done to objects at the edge of the damage sphere`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `arg1`,
            desc: `[attacker] The attacker. Defaults to world`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetCanDamage`,
    desc: `Set the candamage flag for this entity - this means that it can respond to notifies from bullets and grenade hits`,
    example: `self SetCanDamage( true );`,
    callOn: `script_model, script_origin or script_brushmodel`,
    returnType: ``,
    module: `Damage`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `can damage`,
            desc: `The can damage flag`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetPlayerIgnoreRadiusDamage`,
    desc: `Sets the player to ignore radius damage`,
    example: `SetPlayerIgnoreRadiusDamage( true );`,
    callOn: ``,
    returnType: ``,
    module: `Damage`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player ignore radius damage`,
            desc: `Flag indicating whether the player is to ignore radius damage`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AddTestClient`,
    desc: `Adds a test client to the map and returns a reference to that client.`,
    example: `ent[i] = AddTestClient();`,
    callOn: ``,
    returnType: ``,
    module: `Debug`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `Assert`,
    desc: `Assert that the given statement is correct. The function will throw a script error if this is false.`,
    example: `Assert ( enemyInSight == true );`,
    callOn: ``,
    returnType: ``,
    module: `Debug`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `value`,
            desc: `statement that is asserted to be correct`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AssertEx`,
    desc: `Assert that the given statement is correct. The function will throw a script error if this is false, with the given message.`,
    example: `AssertEx( enemyInSight == true, "Script expected enemy to be in sight." );`,
    callOn: ``,
    returnType: ``,
    module: `Debug`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `value`,
            desc: `statement that is asserted to be correct`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `message`,
            desc: `error message`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AssertMsg`,
    desc: `Throws a script error with the given message.`,
    example: `AssertMsg( "Unhandled enemy type." );`,
    callOn: ``,
    returnType: ``,
    module: `Debug`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `message`,
            desc: `error message`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `CreatePrintChannel`,
    desc: `Open a print channel`,
    example: `CreatePrintChannel( "script_bler" );`,
    callOn: ``,
    returnType: ``,
    module: `Debug`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `channel name`,
            desc: `name of channel to be opened`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetDebugEye`,
    desc: `Gets the debug position of the eye for an AI or Player`,
    example: `eyePos = level.player GetDebugEye();`,
    callOn: `A player or actor`,
    returnType: ``,
    module: `Debug`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `A player or actor`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `IPrintLn`,
    desc: `Write line to the screen`,
    example: `IPrintLn( "Where have all the cowboys gone?" );`,
    callOn: ``,
    returnType: ``,
    module: `Debug`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `text`,
            desc: `text to be written`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IPrintLnBold`,
    desc: `write bold line to the screen`,
    example: `IPrintLnBold( "Mitchell!" );`,
    callOn: ``,
    returnType: ``,
    module: `Debug`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `text`,
            desc: `text to be written`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Line`,
    desc: `Draw a debug line on screen`,
    example: `Line( self.origin, self.origin + forwardFar, (0.9, 0.7, 0.6), false );`,
    callOn: ``,
    returnType: ``,
    module: `Debug`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `start`,
            desc: `start vector position of the line`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `end`,
            desc: `end vector position of the line`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `color`,
            desc: `RGB color of the line in a vector, defaults to white`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `depthTest`,
            desc: `whether to only draw the line when it is in front of objects, defaults to false.  Depth test is only supported on pc`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `duration`,
            desc: `How many server frames the line should persist through`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Print`,
    desc: `Development only - write to the console`,
    example: `Print( "Stuff and things!" );`,
    callOn: ``,
    returnType: ``,
    module: `Debug`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `text`,
            desc: `text to be written`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Print3d`,
    desc: `Draw 3d text on screen`,
    example: `Print3d( start, "START", (1.0, 0.8, 0.5), 1, 3 );`,
    callOn: ``,
    returnType: ``,
    module: `Debug`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `origin`,
            desc: `3d position of text to be drawn`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `text`,
            desc: `The text to draw on the screen`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `color`,
            desc: `RGB color of the line in a vector, defaults to white`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `alpha`,
            desc: `alpha value of the text (how transparent), defaults to 1`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `scale`,
            desc: `size scale of the text, defaults to 1`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `duration`,
            desc: `How many server frames the text should persist through`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PrintLn`,
    desc: `Development only - write line to the console`,
    example: `PrintLn( "I could be doing better!" );`,
    callOn: ``,
    returnType: ``,
    module: `Debug`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `text`,
            desc: `text to be written`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetDebugAngles`,
    desc: `Set the debugging angles for a debug camera.`,
    example: `SetDebugAngles( camera.angles );`,
    callOn: ``,
    returnType: ``,
    module: `Debug`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `angles`,
            desc: `The debug player angles`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetDebugOrigin`,
    desc: `Set the debugging origin for a debug camera.`,
    example: `SetDebugOrigin( camera.origin + (0,0,-60) );`,
    callOn: ``,
    returnType: ``,
    module: `Debug`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `origin`,
            desc: `The debug player position`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetPrintChannel`,
    desc: `Set the current print channel. Returns the previous channel.`,
    example: `prevchannel = SetPrintChannel( "script_bler" );`,
    callOn: ``,
    returnType: ``,
    module: `Debug`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `channel name`,
            desc: `name (or number) of channel to print to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetDebugDvar`,
    desc: `Gets the value of a debug dvar, as a string.`,
    example: `if ( GetDebugDvar( "debug" ) != "1" ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Dvars`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `dvar`,
            desc: `The dvar name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetDebugDvarFloat`,
    desc: `Gets the value of a debug dvar, as a floating point number.`,
    example: `if ( GetDebugDvarFloat( "debug_stopenemypos" ) &lt; -1) ...`,
    callOn: ``,
    returnType: ``,
    module: `Dvars`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `dvar`,
            desc: `The dvar name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetDebugDvarInt`,
    desc: `Gets the value of a debug dvar, as an integer.`,
    example: `if ( GetDebugDvarInt( "debug_stopenemypos" ) != -1 ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Dvars`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `dvar`,
            desc: `The dvar name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetDvar`,
    desc: `Gets the value of a dvar, as a string.`,
    example: `if( GetDvar( "debug_skipintro" ) == "on" ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Dvars`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `dvar`,
            desc: `The dvar name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetDvarFloat`,
    desc: `Gets the value of a dvar, as a floating point number.`,
    example: `oldDelay = GetDvarFloat( "effect_delay" );`,
    callOn: ``,
    returnType: ``,
    module: `Dvars`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `dvar`,
            desc: `The dvar name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetDvarInt`,
    desc: `Gets the value of a dvar, as an integer.`,
    example: `level.fogtype = GetDvarInt( "scr_fog_type" );`,
    callOn: ``,
    returnType: ``,
    module: `Dvars`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `dvar`,
            desc: `The dvar name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetDvar`,
    desc: `Sets the value of a script dvar. Can not set code dvars. Script dvars are not preserved in savegames.`,
    example: `SetDvar( "r_eyesAdjust", "1" );`,
    callOn: ``,
    returnType: ``,
    module: `Dvars`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `dvar`,
            desc: `The dvar name as a string`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `value`,
            desc: `The dvar value`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetSavedDvar`,
    desc: `Sets the value of a code "SAVED" dvar. Saved dvars are preserved in save games, and reset to default on level change.`,
    example: `SetSavedDvar( "r_eyesAdjust", "1" )`,
    callOn: ``,
    returnType: ``,
    module: `Dvars`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `dvar`,
            desc: `The dvar name as a string`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `value`,
            desc: `The dvar value`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetFXVisibility`,
    desc: `Returns the amount of visibilty (0.0 - 1.0) between the start and end points`,
    example: `vis = GetFXVisibility( start, end );`,
    callOn: ``,
    returnType: ``,
    module: `Effects`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `start`,
            desc: `Starting point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `end`,
            desc: `Ending point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `LoadFX`,
    desc: `Load the given effect`,
    example: `fx = LoadFX( "explosions/large_vehicle_explosion" );`,
    callOn: ``,
    returnType: ``,
    module: `Effects`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `filename`,
            desc: `The filename of the effect to be loaded, without "fx/" or ".efx"`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlayFX`,
    desc: `Play this effect.`,
    example: `fx = PlayFX( enginesmoke, engine.origin );`,
    callOn: ``,
    returnType: ``,
    module: `Effects`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `effect id`,
            desc: `The effect id returned by loadfx`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `position of effect`,
            desc: `The world position of the effect`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `forward vector`,
            desc: `The forward vector of the effect`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `up vector`,
            desc: `The up vector of the effect`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlayFXOnTag`,
    desc: `Play this effect on the entity and tag.`,
    example: `fx = PlayFXOnTag( id, ent, tag );`,
    callOn: ``,
    returnType: ``,
    module: `Effects`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `effect id`,
            desc: `The effect id returned by loadfx`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `entity`,
            desc: `The entity to attach the effect to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `tag name`,
            desc: `Tag name to attach the effect to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlayLoopedFX`,
    desc: `Play this effect in a loop.`,
    example: `fx = PlayLoopedFX( id, ent, tag );`,
    callOn: ``,
    returnType: ``,
    module: `Effects`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `effect id`,
            desc: `The effect id returned by loadfx`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `repeat delay`,
            desc: `The delay between each loop`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `position`,
            desc: `The position of the effect`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `cull distance`,
            desc: `The culling distance of the effect. 0 means that the effect won't be culled`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `forward`,
            desc: `The forward vector for the effect`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `up`,
            desc: `The up vector for the effect`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetBlur`,
    desc: `Blur the screen over a period of time.`,
    example: `SetBlur( 10.3, 3.0 );`,
    callOn: ``,
    returnType: ``,
    module: `Effects`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `target_blur`,
            desc: `The final blur. The value is pixels for Gaussian blur at 640x480. Must be a floating point value greater than 0`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetExpFog`,
    desc: `Creates an exponential fog.`,
    example: `SetExpFog( 0.0001144, 131/255, 116/255, 71/255, 0 );`,
    callOn: ``,
    returnType: ``,
    module: `Effects`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `startDist`,
            desc: `The distance, in world units, at which the fog begins`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `halfwayDist`,
            desc: `The distance, beyond the startDist, at which the scene will be 50% fogged`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `red`,
            desc: `The red component of the fog as a value between 0.0 and 1.0`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `green`,
            desc: `The red component of the fog as a value between 0.0 and 1.0`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `blue`,
            desc: `The red component of the fog as a value between 0.0 and 1.0`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `transition time`,
            desc: `transition time in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SpawnFx`,
    desc: `Create an effect entity that can be re-triggered efficiently at arbitrary intervals. This doesn't play the effect. Use delete to free it when done.`,
    example: `fxObj = SpawnFx( fxId, pos, dir );`,
    callOn: ``,
    returnType: ``,
    module: `Effects`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `effect id`,
            desc: `The effect id returned by loadfx`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `position`,
            desc: `The position of the effect`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `forward`,
            desc: `The forward vector for the effect`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `up`,
            desc: `The up vector for the effect`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `TriggerFX`,
    desc: `Replays the effect associated with the effect entity. This does not kill any existing effects.`,
    example: `TriggerFX( fxObj, -5 );`,
    callOn: ``,
    returnType: ``,
    module: `Effects`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `effect entity`,
            desc: `The effect id returned by loadfx`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `when`,
            desc: `The time at which the effect should be triggered.  This can be in the past`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `VisionSetNaked`,
    desc: `Sets players' naked-eye vision. Optionally give a transition time from the current vision.`,
    example: `VisionSetNaked( "armada", 1.5 );`,
    callOn: ``,
    returnType: ``,
    module: `Effects`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `vision name`,
            desc: `Vision to transition to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `transition time`,
            desc: `How long, in seconds, to take transitioning to the new vision set if a transition is possible.  Default is one second`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `VisionSetNight`,
    desc: `Sets the vision preset to use for players' night vision view.`,
    example: `VisionSetNight( "armada_nvg", 1.5 );`,
    callOn: ``,
    returnType: ``,
    module: `Effects`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `vision name`,
            desc: `Vision to transition to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `transition time`,
            desc: `How long, in seconds, to take transitioning to the new vision set if a transition is possible.  Default is one second`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AddAIEventListener`,
    desc: `Registers entity to listen to an AI event. Call waittill( &lt;event&gt; ) to get the actual notification"`,
    example: `self AddAIEventListener( "bulletwhizby" )`,
    callOn: `<entity> entity interested in AI events`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `entity interested in AI events`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `event`,
            desc: `an AI event to listen to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Attach`,
    desc: `Attach a model to an entity.`,
    example: `self Attach( "panzerflak_ammo", "tag_weapon_left" );`,
    callOn: `An Entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `modelname`,
            desc: `The model name to attach (string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `tagname`,
            desc: `The tag to attach the model to (string)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `ignoreCollision`,
            desc: `flag to ignore collision. Defaults to false (integer)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Delete`,
    desc: `Removes an entity from the game in the same manner as a trigger_kill"`,
    example: `thing Delete();`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `Detach`,
    desc: `Detaches an attached model from an entity.`,
    example: `self detach("xmodel/explosivepack", "tag_weapon_right");`,
    callOn: `An Entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `modelname`,
            desc: `The model name to detach (string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `DetachAll`,
    desc: `detaches all attached models from an entity`,
    example: `self DetachAll();`,
    callOn: `An Entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `Detonate`,
    desc: `Causes a grenade to explode. Must be called on a grenade.`,
    example: `grenade Detonate( attacker );`,
    callOn: `<entity> A grenade`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `A grenade`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `newowner`,
            desc: `The player who will be the attacker if the grenade does damage to another player. If not specified, will be the original owner of the grenade`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `DoDamage`,
    desc: `Does damage to this entity`,
    example: `tank DoDamage( tank.health + 200, (0,0,0) );`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `health`,
            desc: `The amount of damage to do`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `source position`,
            desc: `The position that the damage comes from`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `attacker`,
            desc: `The entity that dealt the damage (such as an AI or player)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `inflictor`,
            desc: `The entity that the damage came from (such as a grenade or turret)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `DontInterpolate`,
    desc: `pop the entity's position instantaneously to where it moves this time step, rather than smoothly moving there from the previous position`,
    example: `entity DontInterpolate();`,
    callOn: `An entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `EnableLinkTo`,
    desc: `enables linkto for an entity`,
    example: `self.bombtrigger EnableLinkTo();`,
    callOn: `An entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `EntityRadiusDamage`,
    desc: `Does damage to all damageable objects within a given radius. The amount of damage is linear according to how close the object is to the radius. See also Damage/radiusdamage if you don't wish to specify an entity the damage is coming from.`,
    example: `self EntityRadiusDamage( level.player.origin, 500, max, min, attacker );`,
    callOn: `<entity> The damaging entity; this will be ignored during the damage traces.`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `The damaging entity; this will be ignored during the damage traces.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `origin`,
            desc: `The centre of the damage`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `range`,
            desc: `The radius of the damage done`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `max damage`,
            desc: `The maximum damage done. This will be done to objects close to the origin`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `min damage`,
            desc: `The minimum damage done. This will be done to objects at the edge of the damage sphere`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `arg1`,
            desc: `[attacker] The attacker. Defaults to world. Can be different from the entity this is called on`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetAttachIgnoreCollision`,
    desc: `Returns the ignore collision flag of the attached model at the given attachment slot`,
    example: `self GetAttachIgnoreCollision( index );`,
    callOn: `An Entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `modelindex`,
            desc: `The index of the model attached to the entity, starting at 0, so for instance 3 will get the fourth model attached. (integer)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetAttachModelName`,
    desc: `Returns the name of the attached model at the given attachment slot`,
    example: `self GetAttachModelName( index );`,
    callOn: `An Entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `modelindex`,
            desc: `The index of the model attached to the entity, starting at 0, so for instance 3 will get the fourth model attached. (integer)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetAttachSize`,
    desc: `Returns the number of attached models for this entity.`,
    example: `self GetAttachSize();`,
    callOn: `An Entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetAttachTagName`,
    desc: `Returns the tagname of the attached model at the given attachment slot`,
    example: `self GetAttachTagName( index );`,
    callOn: `An Entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `modelindex`,
            desc: `The index of the model attached to the entity, starting at 0, so for instance 3 will get the fourth model attached. (integer)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetCentroid`,
    desc: `Gets the centroid of an entity`,
    example: `centroid = self GetCentroid();`,
    callOn: `An Entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetEnt`,
    desc: `Looks up entities by key and name`,
    example: `spawner = GetEnt( "doorguy1", "targetname" );`,
    callOn: ``,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `name`,
            desc: `name to search for`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `key`,
            desc: `key that name goes with`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetEntArray`,
    desc: `Gets an array of entities that have the given key, name pair.`,
    example: `aeExplosions = GetEntArray( strExplosion, "targetname" );`,
    callOn: ``,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `name`,
            desc: `Name to search for`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `key`,
            desc: `The key to search for`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetEntByNum`,
    desc: `Gets an entity from its entity number`,
    example: `entity = GetEntByNum( entnum );`,
    callOn: ``,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity number`,
            desc: `The number of the entity to get`,
            type: `integer`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetEntityNumber`,
    desc: `Get the entity number of this entity`,
    example: `selfnum = self GetEntityNumber();`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetEntNum`,
    desc: `Get the entity number for this entity`,
    example: `self GetEntNum();`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetLightColor`,
    desc: `Gets the current color of the light, as an RGB vector.`,
    example: `color = self GetLightColor();`,
    callOn: `<entity> A light entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `A light entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetLightExponent`,
    desc: `Gets the current exponent of the light.`,
    example: `exponent = self GetLightExponent();`,
    callOn: `<entity> A light entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `A light entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetLightFovInner`,
    desc: `Gets the current inner fov of a spot light.`,
    example: `radius = self GetLightFovInner();`,
    callOn: `<entity> A light entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `A light entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetLightFovOuter`,
    desc: `Gets the current outer fov of a spot light.`,
    example: `radius = self GetLightFovOuter()`,
    callOn: `<entity> A light entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `A light entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetLightIntensity`,
    desc: `Gets the current intensity of the light.`,
    example: `intensity = self GetLightIntensity();`,
    callOn: `<entity> A light entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `A light entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetLightRadius`,
    desc: `Gets the current radius of the light.`,
    example: `radius = self GetLightRadius()`,
    callOn: `<entity> A light entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `A light entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetNormalHealth`,
    desc: `Gets the normal health of this entity`,
    example: `health = entity GetNormalHealth();`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetOrigin`,
    desc: `Gets the origin of an entity`,
    example: `origin = self GetOrigin();`,
    callOn: `An Entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetShootAtPos`,
    desc: `Gets the position an attacker would shoot at to hit this entity.For AI or player this is the eye position.For other entities it's the tag_eye if there is one else the center of the entity bounding box.`,
    example: `targetPos = self.enemy GetShootAtPos();`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `Hide`,
    desc: `Hides a visible entity`,
    example: `brokenwindow Hide();`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `HidePart`,
    desc: `Hide part of an entity.`,
    example: `self HidePart( "tag_weapon", "weapon_saw" );`,
    callOn: `An Entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `tagname`,
            desc: `The tag to hide. All surfaces with a vertex weighted to the tag will be hidden and have no bullet collision. (string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `modelname`,
            desc: `The optional model name to help specify the part location. (string)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsTouching`,
    desc: ``,
    example: `if ( level.player IsTouching( self ) )...`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `touched entity`,
            desc: `The entity that is to be tested against`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `LaserOff`,
    desc: `Turns off entity's laser sight.`,
    example: `self LaserOff();`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `LaserOn`,
    desc: `Turns on entity's laser sight.`,
    example: `self LaserOn();`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `Launch`,
    desc: `Launch an object that interacts with the world, using an initial velocity. From this point on this object will no longer block either missiles or bullets.`,
    example: `self Launch( (x, y, z) );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `initial velocity`,
            desc: `The initial velocity of the launch`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `LinkTo`,
    desc: `Attaches one entity to another`,
    example: `self.rightturret LinkTo( self, "tag_gunRight", (0,0,0), (0,0,0) );`,
    callOn: `An Entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `linkto entity`,
            desc: `The entity to attach this thing to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `tag`,
            desc: `The tag to attach the entity to`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `originOffset`,
            desc: `The positional offset from the base position`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `anglesOffset`,
            desc: `The angular offset from the base angles`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `LocalToWorldCoords`,
    desc: `Transform the given local coordinate point to a world coordinate point`,
    example: `ramboPoint = self LocalToWorldCoords( delta );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `local coordinate`,
            desc: `The point in local coordinates`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `LockLightVis`,
    desc: `Locks the lights that are visible by this entity to reduce the calculations for fast entities`,
    example: `spawn LockLightVis();`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `RemoveAIEventListener`,
    desc: `Remove an entity from listening to an AI event.`,
    example: `self RemoveAIEventListener();`,
    callOn: `<entity> entity interested in AI events`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `entity interested in AI events`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `event`,
            desc: `an AI event to stop listening to. If none, remove all events for this entity`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetContents`,
    desc: `Sets the contents of an entity. Returns the old contents.`,
    example: ``,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `contents`,
            desc: `an integer describing the contents of this entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetCursorHint`,
    desc: `Sets a visible cursor near to an objective`,
    example: ``,
    callOn: `<entity> An entity that is associated with the cursor hint`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity that is associated with the cursor hint`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `hint`,
            desc: `one of the following strings: "HINT_NOICON", "HINT_ACTIVATE", "HINT_HEALTH", "HINT_FRIENDLY"`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetHintString`,
    desc: `Sets the hint string for a usable entity`,
    example: `fuel_lever SetHintString( &amp;"ROCKET_FUEL_LEVER" );`,
    callOn: `<entity> Either a trigger_use entity or an actor`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `Either a trigger_use entity or an actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `string`,
            desc: `The string to use for a hint near a usable entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetLightColor`,
    desc: `Sets the current color of the light, as an RGB vector.`,
    example: `self SetLightColor( (0.5, 0.75, 1.0) )`,
    callOn: `<entity> A light entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `A light entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `color`,
            desc: `An RGB vector with components in the range 0 to 1.  The given values get rounded before they are stored`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetLightExponent`,
    desc: `Sets the current exponent of the light.`,
    example: `self SetLightExponent( 1 );`,
    callOn: `<entity> A light entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `A light entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `exponent`,
            desc: `A new value for the exponent of the light.  This should be an integer in the range of 0 to 100`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetLightFovRange`,
    desc: `Sets the current radius of the light.`,
    example: `self SetLightRadius( 200 );`,
    callOn: `<entity> A light entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `A light entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `fov_outer`,
            desc: `A new value for the outer FOV of the light, in degrees.  This cannot be larger than the fov when the map was compiled, or less than 1`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `fov_inner`,
            desc: `A new value for the inner FOV of the light, in degrees.  This cannot be larger than fov_outer, or less than 0.  If not specified, the map value is used`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetLightIntensity`,
    desc: `Sets the current intensity of the light.`,
    example: `self SetLightIntensity( 1.5 );`,
    callOn: `<entity> A light entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `A light entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `intensity`,
            desc: `A new value for the intensity of the light.  1 is fullbright, but values can be larger than 1`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetLightRadius`,
    desc: `Sets the current radius of the light.`,
    example: `self SetLightRadius( 200 );`,
    callOn: `<entity> A light entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `A light entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `radius`,
            desc: `A new value for the radius of the light.  This cannot be larger than the radius when the map was compiled`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetLookAtText`,
    desc: `Set look at text for entity.`,
    example: ``,
    callOn: `an entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `lookat text line 1`,
            desc: `The unlocalized look at text for this entity. Line is green and usually a name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `lookat text line 2`,
            desc: `The localized look at text for this entity. Line is white and usually a type`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetModel`,
    desc: `Sets the model of the entity to the given model name`,
    example: `splinter SetModel( "wood_plank2" );`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `model name`,
            desc: `The name of the model to set this entity to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetNormalHealth`,
    desc: `Sets the normal health of this entity`,
    example: `self SetNormalHealth( (self.maxhealth - self.damageTaken) / self.maxHealth );`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `health`,
            desc: `The new normal health`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetShadowHint`,
    desc: `Sets the shadow hint for the entity`,
    example: `tankgun SetShadowHint( "normal" );`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `prority`,
            desc: `"normal", "never", "high_priority", "low_priority", "always", or "receiver"`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetStableMissile`,
    desc: `This entity will shoot missiles that do not destabilize. Only applicable to vehicles, players and AI`,
    example: ``,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `stablemissileflag`,
            desc: `True if the entity shoots stable missiles`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Show`,
    desc: `Shows a hidden entity`,
    example: `brokenwindow Show();`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `ShowAllParts`,
    desc: `Show all parts of an entity.`,
    example: `self ShowAllParts();`,
    callOn: `An Entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `ShowPart`,
    desc: `Show part of an entity.`,
    example: `self ShowPart( "tag_weapon", "weapon_saw" );`,
    callOn: `An Entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `tagname`,
            desc: `The tag to show. All surfaces with a vertex weighted to the tag will be shown. (string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `modelname`,
            desc: `The optional model name to help specify the part location. (string)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ShowToPlayer`,
    desc: `Show the entity to a given client`,
    example: ``,
    callOn: `An Entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: `The player to show the entity to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `StartIgnoringSpotLight`,
    desc: `Prevent spot light from affecting this entity.`,
    example: `self StartIgnoringSpotLight();`,
    callOn: `An Entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `StopIgnoringSpotLight`,
    desc: `Stop preventing spot light from affecting this entity.`,
    example: `self StopIgnoringSpotLight();`,
    callOn: `An Entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `Unlink`,
    desc: `Unlinks a linked entity from another entity`,
    example: `guy Unlink();`,
    callOn: `An entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `UnlockLightVis`,
    desc: `Unlocks the lights that are visible by this entity`,
    example: `spawn UnlockLightVis();`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `UseBy`,
    desc: `Uses the entity with the passed in entity as the activator`,
    example: `level.ArmoredCar.turret UseBy( level.player );`,
    callOn: `The entity to be used`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `using entity`,
            desc: `The entity that is using the other entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `UseTriggerRequireLookAt`,
    desc: `Modifies the use trigger so that it requires the user to be looking at it`,
    example: `fuel_lever UseTriggerRequireLookAt();`,
    callOn: `<entity> A trigger_use entity`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `A trigger_use entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `CloseFile`,
    desc: `Close a script-controlled file. Returns 1 if successful and -1 if unsuccessful.`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `File`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `filenum`,
            desc: `The number of the script file`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `FGetArg`,
    desc: `Get a specific argument number from the current line`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `File`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `filenum`,
            desc: `The file number returned by openfile`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `arg`,
            desc: `the argument number`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `FPrintFields`,
    desc: `Writes items out to a script-controlled file, inserting a comma in-between each one.`,
    example: `FPrintFields( filenum, Player, Health, WeaponName ); //output to file: JohnnyBoy,100,M16`,
    callOn: ``,
    returnType: ``,
    module: `File`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `filenum`,
            desc: `The number of the script file`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `output`,
            desc: `The string to be output`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `FPrintLn`,
    desc: `Write text out to a script-controlled file`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `File`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `filenum`,
            desc: `The number of the script file`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `output`,
            desc: `The string to be output`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `FReadLn`,
    desc: `Read the next line of comma separated value text from a script-controlled file. Returns the number of comma separated values in the line.`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `File`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `file num`,
            desc: `The number of the script file`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `OpenFile`,
    desc: `Open a file for reading, writing, or appending. If successful returns a file number, otherwise returns -1`,
    example: `filenum = OpenFile( "info.txt", "read" );`,
    callOn: ``,
    returnType: ``,
    module: `File`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `filename`,
            desc: `The name of the file to open`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `mode`,
            desc: `The file mode. Valid arguments are 'read', 'write' and 'append'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ChangeFontScaleOverTime`,
    desc: `Set a hud element to transition in fontScale over time. Normally setting the fontScale of an element causes an immediate visual change. However, if the fontScale gets set within &lt;time&gt; after calling ChangeFontScaleOverTime, then the hud element will transition to the new fontScale over the remaining &lt;time&gt;.`,
    example: `level.introstring1 ChangeFontScaleOverTime( 1.2 ); level.introstring1.fontScale = 0.3; // This will transition the fontScale from whatever it was before to the new value of 0.3 over 1.2 seconds.`,
    callOn: `Hud Element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `time`,
            desc: `The time to scale the element font in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ClearAllTextAfterHudelem`,
    desc: `Clear the config strings for the unique text set after this string. This is intended for development use only.`,
    example: `level.freeTextMarker ClearAllTextAfterHudelem();`,
    callOn: `Hud Element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `ClearTargetEnt`,
    desc: `Clear this waypoint from targetting an entity.`,
    example: `waypoint ClearTargetEnt();`,
    callOn: `Hud Element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `HUD`,
            desc: `An HUD element`,
            type: `HUD Element`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `Destroy`,
    desc: `Remove this Hud element altogether.`,
    example: `self.bombstopwatch Destroy();`,
    callOn: `Hud Element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `HUD`,
            desc: `An HUD element`,
            type: `HUD Element`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `FadeOverTime`,
    desc: `Set a hud element to transition in color (or alpha) over time. Normally setting the color (or alpha) of an element causes an immediate visual change. However, if the color (or alpha) gets set within &lt;time&gt; after calling fadeOverTime, then the hud element will transition to the new color over the remaining &lt;time&gt;.`,
    example: `level.introstring1 FadeOverTime( 1.2 ); level.introstring1.alpha = 0.3; // This will transition the alpha from whatever it was before to the new value of 0.3 over 1.2 seconds.`,
    callOn: `Hud Element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `time`,
            desc: `The time to fade the element in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `MoveOverTime`,
    desc: `Set a hud element to move over time.`,
    example: `newStr MoveOverTime( timer );`,
    callOn: `Hud Element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `time`,
            desc: `The time to move the element in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `NewClientHudElem`,
    desc: `Create a new hud element for a particular client`,
    example: `self.kc_topbar = NewClientHudElem(self);`,
    callOn: ``,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `client`,
            desc: `The client for whom the hud element is created`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `NewHudElem`,
    desc: `Create a new hud element`,
    example: `overlay = NewHudElem();`,
    callOn: ``,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `NewTeamHudElem`,
    desc: `Create a new hud element for a particular team`,
    example: `level.progressbar_allies_neutralize = NewTeamHudElem( "axis" );`,
    callOn: ``,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `team`,
            desc: `The team for whom the hud element is created. Must be 'axis', 'allies' or 'spectator'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Obituary`,
    desc: `Create an obituary for a character`,
    example: `Obituary( self, attacker, sWeapon, sMeansOfDeath );`,
    callOn: ``,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `victim`,
            desc: `The victim entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `attacker`,
            desc: `The attacker entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weapon`,
            desc: `The weapon name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weapon`,
            desc: `The means of death as a string`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Reset`,
    desc: `Reset a HUD element to its default state.`,
    example: `element Reset();`,
    callOn: `Hud Element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `HUD`,
            desc: `An HUD element`,
            type: `HUD Element`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `ScaleOverTime`,
    desc: `Set a hud element to scale over time.`,
    example: `other.progressbar ScaleOverTime( level.planttime, level.barsize, 8 );`,
    callOn: `Hud Element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `time`,
            desc: `The time to scale the element in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `width`,
            desc: `The new width of the material`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `height`,
            desc: `The new height of the material`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetClock`,
    desc: `Set a clock HUD element to count down over a time period.`,
    example: `level.bombstopwatch SetClock( 5, 60, "hudStopwatch", 64, 64 );`,
    callOn: `Hud Clock Element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `time`,
            desc: `The new timer time in seconds to count down`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `The time in seconds represented by a full cycle of the hand, for instance a stopwatch would be 60s`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `material`,
            desc: `The material for the hud clock`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `width`,
            desc: `The width of the material`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `height`,
            desc: `The height of the material`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetClockUp`,
    desc: `Set a clock HUD element to count up over a time period.`,
    example: `level.bombstopwatch SetClockUp( 5, 60, "hudStopwatch", 64, 64 );`,
    callOn: `Hud Clock Element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `time`,
            desc: `The new timer time in seconds to count up`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `full time`,
            desc: `The time in seconds represented by a full cycle of the hand, for instance a stopwatch would be 60s`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `material`,
            desc: `The material for the hud clock`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `width`,
            desc: `The width of the material`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `height`,
            desc: `The height of the material`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetGameTypeString`,
    desc: `Set the game type string for the game`,
    example: ``,
    callOn: `A Hud Element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `game type`,
            desc: `A string containing the game type`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetMapNameString`,
    desc: `Set the map name string`,
    example: ``,
    callOn: `A HUD element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `map name`,
            desc: `A string containing the map name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetPlayerNameString`,
    desc: `Set the player name string for a HUD element`,
    example: ``,
    callOn: `A HUD element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: `A player entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetPulseFX`,
    desc: `Set the hudelem string to display with a "Pulse" effect.`,
    example: `elem SetPulseFX( 40, 2000, 600 );`,
    callOn: `A HUD element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `speed`,
            desc: `Time (in milliseconds) each letter takes to type out`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `decayStart`,
            desc: `Time to wait before starting the string's decay effect`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `decayDuration`,
            desc: `How long to spend decaying`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetShader`,
    desc: `Set the material for this Hud Element`,
    example: `waypoint SetShader( "playbook_objective_stop", 15, 15 );`,
    callOn: `Hud Element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `materialname`,
            desc: `A the name of the material to set`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `width`,
            desc: `The width of the material`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `height`,
            desc: `The height of the material`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTargetEnt`,
    desc: `Set the entity that this waypoint should target. In MP, entity should already be a broadcasting entity, as with Objective_OnEntity().`,
    example: `waypoint SetTargetEnt( level.axis.bombcarrier );`,
    callOn: `Hud Element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `Entity to Target`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTenthsTimer`,
    desc: `Set a timer HUD element to count down in tenths of a second`,
    example: `self.kc_timer SetTenthsTimer( self.archivetime - delay );`,
    callOn: `Hud Timer Element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `time`,
            desc: `The new timer time`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTenthsTimerUp`,
    desc: `Set a timer HUD element to count up in tenths of a second`,
    example: `self.kc_timer SetTenthsTimerUp( self.archivetime - delay );`,
    callOn: `Hud Timer Element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `time`,
            desc: `The new timer time`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetText`,
    desc: `Set HUD text for this element.`,
    example: `level.introstring1 SetText(string1);`,
    callOn: `Hud Element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `text`,
            desc: `A localized text reference`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTimer`,
    desc: `Set a timer HUD element to count down`,
    example: `level.reinforcement_hud SetTimer( level.counter )`,
    callOn: `Hud Timer Element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `time`,
            desc: `The new timer time`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTimerUp`,
    desc: `Set a timer HUD element to count up`,
    example: `level.reinforcement_hud SetTimerUp( level.counter )`,
    callOn: `Hud Timer Element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `time`,
            desc: `The new timer time`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetValue`,
    desc: `Set a value HUD element to a given value.`,
    example: `level.reinforcement_hud SetValue( 0 );`,
    callOn: `Hud Value Element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `value`,
            desc: `The value to set the element to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetWayPoint`,
    desc: `Sets a hud element to be a waypoint.`,
    example: `newdeathicon SetWayPoint( true );`,
    callOn: `A HUD element`,
    returnType: ``,
    module: `HUD`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `constantSize`,
            desc: `boolean describing whether the hud element remains the same size`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `offscreenMaterialName`,
            desc: `Material to draw when waypoint is offscreen`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ChangeLevel`,
    desc: `Changes to the new level`,
    example: `ChangeLevel( "burnville", false );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `mapname`,
            desc: `The name of the map to change to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `persistent`,
            desc: `Flag allowing player to keep their inventory through the transition`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `exitTime`,
            desc: `Time in seconds of the exit fade`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Cinematic`,
    desc: `Play the given cinematic`,
    example: `Cinematic( "cod_end" );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `cinematic name`,
            desc: `The cinematic name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `exitTime`,
            desc: `Time in seconds of the exit fade`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `CinematicInGame`,
    desc: `Play the given cinematic without blocking the level`,
    example: `CinematicInGame( "cod_end" );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `cinematic name`,
            desc: `The cinematic name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `CinematicInGameLoop`,
    desc: `Play the given cinematic in a loop, without blocking (deprecated)`,
    example: `CinematicInGameLoop( "cod_end" );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `cinematic name`,
            desc: `The cinematic name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `CinematicInGameLoopFromFastfile`,
    desc: `Play the given cinematic, which is already loaded, in a loop, without blocking`,
    example: `CinematicInGameLoopFromFastfile( "cod_end" );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `cinematic name`,
            desc: `The cinematic name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `CinematicInGameLoopResident`,
    desc: `Play the given cinematic in a loop, without blocking`,
    example: `CinematicInGameLoopResident( "cod_end" );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `cinematic name`,
            desc: `The cinematic name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `CinematicInGameSync`,
    desc: `Play the given cinematic, blocking until it starts`,
    example: `CinematicInGameSync( "cod_end" );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `cinematic name`,
            desc: `The cinematic name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ClearLocalizedStrings`,
    desc: `Clear all of the localized strings. This is useful if you are frequently changing hud text for development.`,
    example: `ClearLocalizedStrings();`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `firstString`,
            desc: `the first hudelem with a string to clan AI event to stop listening to. If none, remove all events for this entity`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `DrawCompassFriendlies`,
    desc: `Set whether friendlies are shown on the compass`,
    example: `DrawCompassFriendlies( true );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `drawcompassfriendlies`,
            desc: `A boolean setting whether friendly troops are shown on the compass`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Earthquake`,
    desc: `Create an earthquake at the given point`,
    example: `Earthquake( 0.3, 3, self.origin, 850 );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `scale`,
            desc: `The scale of the quake`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `duration`,
            desc: `Duration in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `source`,
            desc: `The earthquake origin`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `radius`,
            desc: `The earthquake radius of effect`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ExitLevel`,
    desc: `exits the current level`,
    example: `ExitLevel( false );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `save persistent`,
            desc: `if true then player info is retained`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetAllNodes`,
    desc: `Gets all of the nodes in a level`,
    example: `nodes = GetAllNodes();`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetAllVehicleNodes`,
    desc: `Gets all of the vehicle nodes in a level`,
    example: `nodes = GetAllVehicleNodes();`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetArrayKeys`,
    desc: `Returns an array consisting of the keys of the input array.`,
    example: `result = GetArrayKeys( array );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `array`,
            desc: `Input array`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetBrushModelCenter`,
    desc: `deprecated - Use GetOrigin`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `Entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetDiffuculty`,
    desc: `Gets the game difficulty - can return values of "easy", "medium", "difficult" and "fu".`,
    example: `skill = GetDiffuculty();`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetMapSunDirection`,
    desc: `Returns the bsp's default sun direction.`,
    example: `level.defaultSunDir = GetMapSunDirection();`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetMapSunLight`,
    desc: `Returns the default sun color for a level in an array of size 3. Index 0 is red, index 1 is green, and index 2 is blue.`,
    example: `level.defaultSunLight = GetMapSunLight();`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetNode`,
    desc: `Gets a node with the given name, key pair`,
    example: `node = GetNode( self.target, "targetname" );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `name`,
            desc: `name to search for`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `key`,
            desc: `key that name goes with`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetNodeArray`,
    desc: `Gets an array of nodes that have the given name, key pair`,
    example: `node = GetNodeArray( self.target, "targetname" );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `name`,
            desc: `name to search for`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `key`,
            desc: `key that name goes with`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetNorthYaw`,
    desc: `Returns the yaw value of North`,
    example: `northYaw = GetNorthYaw();`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetNumVehicles`,
    desc: `Gets the number of vehicles entities in the level`,
    example: `vehicleCount = GetNumVehicles();`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetReflectionLocs`,
    desc: `Gets array of the locations of all of the reflection_probes in the level`,
    example: `reflection_locs = GetReflectionLocs();`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetStartTime`,
    desc: `Returns the start time for the current round.`,
    example: `GetStartTime();`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetTime`,
    desc: `Gets the level time in Milliseconds from the start of the level.`,
    example: `nextNodeTime = GetTime() + 500;`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetTimeScale`,
    desc: `gets the current timescale.`,
    example: `GetTimeScale();`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetVehicleNode`,
    desc: `Gets a vehicle node with the given name, key pair`,
    example: `node = GetVehicleNode( self.target, "targetname" );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `name`,
            desc: `The name to search for`,
            type: `string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `key`,
            desc: `The key that name goes with`,
            type: `string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetVehicleNodeArray`,
    desc: `Gets an array of vehicle nodes that have the given name, key pair`,
    example: `nodes = GetVehicleNodeArray( self.target, "targetname" );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `name`,
            desc: `The name to search for`,
            type: `string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `key`,
            desc: `The key that name goes with`,
            type: `string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsCinematicPlaying`,
    desc: `checks if a cinematic is playing.`,
    example: `IsCinematicPlaying();`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `IsSplitScreen`,
    desc: `Returns true if the game is a splitscreen game`,
    example: `level.splitscreen = IsSplitScreen()`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `IsValidGametype`,
    desc: `Returns true if the string is a valid game type`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `game type`,
            desc: `a string to check`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `LerpSunDirection`,
    desc: `Overrides the sun direction for a level. Use 'resetSunDirection' to revert to the map's values. The direction will lerp from the current direction on the client.`,
    example: `LerpSunDirection( (-0.5, 0.5, -1.0), (-0.5, -0.5, -1.0), 1.0 );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `dir to sun now`,
            desc: `The direction to the sun now.  It need not be normalized`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `dir to sun at end`,
            desc: `The direction to the sun after lerp time.  It need not be normalized`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `lerp time`,
            desc: `Time in second to lerp over`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Map`,
    desc: `Loads a new map`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `map name`,
            desc: `The map to load`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `save persistent`,
            desc: `if true then player info is retained`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `MapExists`,
    desc: `Returns true if the map with the given name exists on the server`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `map name`,
            desc: `The map to check`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Map_Restart`,
    desc: `Restarts the map`,
    example: `Map_Restart( true );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `save persistent`,
            desc: `if true then player info is retained`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `MissionFailed`,
    desc: `Does the same thing as the player being killed`,
    example: `MissionFailed();`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `MissionSuccess`,
    desc: `Transitions to a new level via a mission success page`,
    example: `MissionSuccess( "tankdrivetown", false );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `mapname`,
            desc: `The name of the map to change to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `persistent`,
            desc: `Flag allowing player to keep their inventory through the transition`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ResetSunDirection`,
    desc: `Restores the map's default sun direction values.`,
    example: `ResetSunDirection();`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `ResetSunLight`,
    desc: `Restores the map's default sunlight values.`,
    example: `ResetSunLight();`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `SetClientNameMode`,
    desc: `alters the way that the player name is updated, to prevent cheating by spectators altering their name to communicate with active players.`,
    example: `SetClientNameMode( "auto_change" );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `name mode`,
            desc: `either 'auto_change' or 'manual_change'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetCullDist`,
    desc: `Set the cull distance for a level`,
    example: `SetCullDist( 7200 );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `cull distance`,
            desc: `The cull distance`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetGameEndTime`,
    desc: `Sets the time the current match will end`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `SetMapCenter`,
    desc: `Set the center of the map (used by the network code to optimize position data)`,
    example: ``,
    callOn: `A position`,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `SetMiniMap`,
    desc: `Sets the info for the satelite map on the compass.`,
    example: `SetMiniMap( "compass_map_default", 12672, 5824, -4224, -11072 );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `material name`,
            desc: `The name of the satelite map material`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `arg2`,
            desc: `<upper-left x> X-coordinate of the world location of the upper-left corner of the material`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `arg3`,
            desc: `<upper-left y> Y-coordinate of the world location of the upper-left corner of the material`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `arg4`,
            desc: `<lower-right x> X-coordinate of the world location of the lower-right corner of the material`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `arg5`,
            desc: `<lower-right y> Y-coordinate of the world location of the lower-right corner of the material`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetMissionDvar`,
    desc: `changes the value of the specified mission dvar`,
    example: `SetMissionDvar( "mission_01", 1 );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `SetSunDirection`,
    desc: `Overrides the sun direction for a level. Use 'resetSunDirection' to revert to the map's values.`,
    example: `SetSunDirection( (-0.5, 0.5, -1.0) );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `dir to sun`,
            desc: `The direction to the sun.  It need not be normalized`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetSunLight`,
    desc: `Overrides the sun color for a level. Use 'resetSunLight' to revert to the map's values.`,
    example: `SetSunLight( 1.2, 1.2, 0.4 );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `red`,
            desc: `The red component of sunlight color.  0 is black, 1 is fullbright, more than 1 is overbright`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `green`,
            desc: `The green component of sunlight color.  0 is black, 1 is fullbright, more than 1 is overbright`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `blue`,
            desc: `The blue component of sunlight color.  0 is black, 1 is fullbright, more than 1 is overbright`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTimeScale`,
    desc: `sets the current timescale.`,
    example: `SetTimeScale( 0.5 );`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `SetVoteNoCount`,
    desc: `Sets the number of No votes`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `no count`,
            desc: `Number of 'no' votes`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetVoteString`,
    desc: `Sets the string for a vote`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `string`,
            desc: `The vote string`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetVoteTime`,
    desc: `Sets the start time for a vote`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `time`,
            desc: `The vote time in ms`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetVoteYesCount`,
    desc: `Sets the number of Yes votes`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `no count`,
            desc: `Number of 'yes' votes`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetWinningPlayer`,
    desc: `Sets a player to be the winner`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: `The player to set as the winning player`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetWinningTeam`,
    desc: `Sets a team to be the winner`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `team`,
            desc: `The team name of the winning team. Must be 'axis', 'allies' or 'none'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `StopCinematicInGame`,
    desc: `Stop the currently playing cinematic`,
    example: `StopCinematicInGame();`,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `UpdateClientNames`,
    desc: `Update all of the client names: only works in 'manual_change' mode`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `WorldEntNumber`,
    desc: `Returns the entity number for the world`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Level`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `ACos`,
    desc: `Returns an angle corresponding to a particular cosine value`,
    example: `upAngle = ACos( distanceratio );`,
    callOn: ``,
    returnType: ``,
    module: `Math`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `cos value`,
            desc: `A cosine value`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ASin`,
    desc: `Returns an angle corresponding to a particular sin value`,
    example: `upAngle = ASin( upAmount );`,
    callOn: ``,
    returnType: ``,
    module: `Math`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `sin value`,
            desc: `A sin value`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ATan`,
    desc: `Returns an angle corresponding to a particular tangential value`,
    example: `upAngle = ATan( height/distance );`,
    callOn: ``,
    returnType: ``,
    module: `Math`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `tan value`,
            desc: `A tangential value`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Cos`,
    desc: `Returns the cos of an angle`,
    example: `frac = Cos( degrees );`,
    callOn: ``,
    returnType: ``,
    module: `Math`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `angle`,
            desc: `An angle in degrees`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Int`,
    desc: `Casts a floating point number or a string to an integer`,
    example: `x = Int( self.HUDHealthHeight );`,
    callOn: ``,
    returnType: ``,
    module: `Math`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `value`,
            desc: `A string or floating point number to cast to an integer`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PointOnSegmentNearestToPoint`,
    desc: `Given a line segment and a point P, this returns the point on the segment that is closest to P.`,
    example: `nearestPoint = PointOnSegmentNearestToPoint( A, B, P );`,
    callOn: ``,
    returnType: ``,
    module: `Math`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `SegmentA`,
            desc: `One endpoint of the line segment`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `SegmentB`,
            desc: `Other endpoint of the line segment`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `P`,
            desc: `The point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `RandomFloat`,
    desc: `Returns a random floating point number r, where 0 &lt;= r &lt; max`,
    example: `if ( RandomFloat( 100 ) &gt; 50 ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Math`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `max`,
            desc: `The maximum floating point size`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `RandomFloatRange`,
    desc: `Returns a random floating point number r, where min &lt;= r &lt; max`,
    example: `rand = RandomFloatRange( 3.0, 5.0 );`,
    callOn: ``,
    returnType: ``,
    module: `Math`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `min`,
            desc: `The minimum result`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `max`,
            desc: `The maximum result`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `RandomInt`,
    desc: `Returns a random integer between 0 and max-1 inclusive`,
    example: `if ( RandomInt( 100 ) &gt; 50 ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Math`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `max`,
            desc: `The maximum integer size`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `RandomIntRange`,
    desc: `Returns a random integer r, where min &lt;= r &lt; max`,
    example: `rand = RandomIntRange( 3, 5 );`,
    callOn: ``,
    returnType: ``,
    module: `Math`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `min`,
            desc: `The minimum result`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `max`,
            desc: `The maximum result + 1`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Sin`,
    desc: `Returns the sin of an angle`,
    example: `frac = Sin( degrees );`,
    callOn: ``,
    returnType: ``,
    module: `Math`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `angle`,
            desc: `An angle in degrees`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Tan`,
    desc: `Returns the tan of an angle`,
    example: `frac = Tan( degrees );`,
    callOn: ``,
    returnType: ``,
    module: `Math`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `angle`,
            desc: `An angle in degrees`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `VectorFromLineToPoint`,
    desc: `Given a line and a point P, this returns a vector perpendicular to the line and pointing from the line to P.`,
    example: `myvector = VectorFromLineToPoint( A, B, P );`,
    callOn: ``,
    returnType: ``,
    module: `Math`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `SegmentA`,
            desc: `One point on the line`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `SegmentB`,
            desc: `Another point on the line`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `P`,
            desc: `The point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `CloseInGameMenu`,
    desc: `close the in game menu for this client.`,
    example: `player CloseInGameMenu();`,
    callOn: `A Client`,
    returnType: ``,
    module: `Menus`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: ``,
            desc: `A Client`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `Missile_CreateAttractorEnt`,
    desc: `Creates a missile attractor at the origin of an entity`,
    example: `attractor = Missile_CreateAttractorEnt( enemy_chopper, 10000, 6000 );`,
    callOn: ``,
    returnType: ``,
    module: `Missile`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `The entity that is to be an attractor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `strength`,
            desc: `The strength of the attractor (maximum acceleration it can apply to a missile)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `maxDist`,
            desc: `The maximum distance at which the missile can be affected.  The effect of the attractor falls off from <strength> to zero from the center to this distance away from the center`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Missile_CreateAttractorOrigin`,
    desc: `Creates a missile attractor at the given location`,
    example: `attractor = Missile_CreateAttractorOrigin( (100, 350, 10), 10000, 6000 );`,
    callOn: ``,
    returnType: ``,
    module: `Missile`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `origin`,
            desc: `The center of the attractor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `strength`,
            desc: `The strength of the attractor (maximum acceleration it can apply to a missile)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `maxDist`,
            desc: `The maximum distance at which the missile can be affected.  The effect of the attractor falls off from <strength> to zero from the center to this distance away from the center`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Missile_CreateRepulsorEnt`,
    desc: `Creates a missile repulsor at the origin of an entity`,
    example: `repulsor = Missile_CreateRepulsorEnt( enemy_chopper, 10000, 6000 );`,
    callOn: ``,
    returnType: ``,
    module: `Missile`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `The entity that is to be a repulsor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `strength`,
            desc: `The strength of the repulsor (maximum acceleration it can apply to a missile)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `maxDist`,
            desc: `The maximum distance at which the missile can be affected.  The effect of the attractor falls off from <strength> to zero from the center to this distance away from the center`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Missile_CreateRepulsorOrigin`,
    desc: `Creates a missile Repulsor at the given location`,
    example: `repulsor = Missile_CreateRepulsorOrigin( (100, 350, 10), 10000, 6000 );`,
    callOn: ``,
    returnType: ``,
    module: `Missile`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `origin`,
            desc: `The center of the Repulsor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `strength`,
            desc: `The strength of the Repulsor (maximum acceleration it can apply to a missile)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `maxDist`,
            desc: `The maximum distance at which the missile can be affected.  The effect of the attractor falls off from <strength> to zero from the center to this distance away from the center`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Missile_DeleteAttractor`,
    desc: `Deletes a missile attractor or repulsor`,
    example: `Missile_DeleteAttractor( attractor );`,
    callOn: ``,
    returnType: ``,
    module: `Missile`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `attractor`,
            desc: `The attractor or repulsor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `DevAddPitch`,
    desc: `Add pitch in local space. This is just for development purposes and doesn't interpolate`,
    example: ``,
    callOn: `script_model, script_origin or script_brushmodel`,
    returnType: ``,
    module: `Motion`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `pitch angle`,
            desc: `The change in pitch in degrees`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `DevAddRoll`,
    desc: `Add yaw in local space. This is just for development purposes and doesn't interpolate`,
    example: ``,
    callOn: `script_model, script_origin or script_brushmodel`,
    returnType: ``,
    module: `Motion`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `roll angle`,
            desc: `The change in roll in degrees`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `DevAddYaw`,
    desc: `Add yaw in local space. This is just for development purposes and doesn't interpolate`,
    example: ``,
    callOn: `script_model, script_origin or script_brushmodel`,
    returnType: ``,
    module: `Motion`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `yaw angle`,
            desc: `The change in yaw in degrees`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `MoveGravity`,
    desc: `Fling this entity.`,
    example: `self MoveGravity( break_vector, time );`,
    callOn: `script_model, script_origin or script_brushmodel`,
    returnType: ``,
    module: `Motion`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `initial velocity`,
            desc: `The initial velocity to fling this entity at`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `The time to move the entity in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `MoveTo`,
    desc: `Move this entity to the given point.`,
    example: `dummy MoveTo( dest_org, .5, .05, .05 );`,
    callOn: `script_model, script_origin or script_brushmodel`,
    returnType: ``,
    module: `Motion`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `point`,
            desc: `The point to move the entity to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `The time to move the entity in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `The time spent accelerating`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `The time spent decelerating`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `MoveX`,
    desc: `Move this entity to the given world x value`,
    example: `train MoveX( -4400, 60, 15, 20 );`,
    callOn: `script_model, script_origin or script_brushmodel`,
    returnType: ``,
    module: `Motion`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `point`,
            desc: `The x value to move the entity to, as a floating point number`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `The time to move the entity in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `acceleration time`,
            desc: `The time spent accelerating in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `deceleration time`,
            desc: `The time spent decelerating in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `MoveY`,
    desc: `move this entity to the given world y value`,
    example: `hangardoor MoveY( 320, 10 );`,
    callOn: `script_model, script_origin or script_brushmodel`,
    returnType: ``,
    module: `Motion`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `point`,
            desc: `The y value to move the entity to, as a floating point number`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `The time to move the entity in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `acceleration time`,
            desc: `The time spent accelerating in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `deceleration time`,
            desc: `The time spent decelerating in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `MoveZ`,
    desc: `Move this entity to the given world z value`,
    example: ``,
    callOn: `script_model, script_origin or script_brushmodel`,
    returnType: ``,
    module: `Motion`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `point`,
            desc: `The z value to move the entity to, as a floating point number`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `The time to move the entity in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `acceleration time`,
            desc: `The time spent accelerating in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `deceleration time`,
            desc: `The time spent decelerating in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `NotSolid`,
    desc: `Unsets the solid flag, so that this object is no longer collidable.`,
    example: `self NotSolid();`,
    callOn: `script_brushmodel`,
    returnType: ``,
    module: `Motion`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `script_brushmodel`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `PhysicsLaunch`,
    desc: `Permanently turn this entity into a physics object with an intial force vector at the specified point.`,
    example: `dummy PhysicsLaunch( contact_point, initial_force );`,
    callOn: `script_model`,
    returnType: ``,
    module: `Motion`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `contact_point`,
            desc: `The point to apply the initial force`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `initial_force`,
            desc: `The force vector to apply`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `RotatePitch`,
    desc: `Rotate this entity to the given pitch`,
    example: `treeorg RotatePitch( -5, 0.26, 0.15, 0.1 );`,
    callOn: `script_model, script_origin or script_brushmodel`,
    returnType: ``,
    module: `Motion`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `pitch angle`,
            desc: `The new pitch angle in degrees`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `The time to rotate in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `acceleration time`,
            desc: `The time spent accelerating in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `deceleration time`,
            desc: `The time spent decelerating in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `RotateRoll`,
    desc: `Rotate this entity to the given roll angle`,
    example: `self RotateRoll( (2 * 1500 + 3 * Randomfloat( 2500 )) * -1, 5, 0, 0 );`,
    callOn: `script_model, script_origin or script_brushmodel`,
    returnType: ``,
    module: `Motion`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `roll angle`,
            desc: `The new roll angle in degrees`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `The time to rotate in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `acceleration time`,
            desc: `The time spent accelerating in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `deceleration time`,
            desc: `The time spent decelerating in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `RotateTo`,
    desc: `Rotate this entity to the given world rotation value`,
    example: `shutter RotateTo( (shutter.angles[0], newYaw, shutter.angles[2]), newTime );`,
    callOn: `script_model, script_origin or script_brushmodel`,
    returnType: ``,
    module: `Motion`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `angles`,
            desc: `The new world angle to rotate to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `The time to rotate in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `acceleration time`,
            desc: `The time spent accelerating in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `deceleration time`,
            desc: `The time spent decelerating in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `RotateVelocity`,
    desc: `Rotate this entity at a particular velocity for a given time`,
    example: `self RotateVelocity( (x,y,z), 12 );`,
    callOn: `script_model, script_origin or script_brushmodel`,
    returnType: ``,
    module: `Motion`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `rotate velocity`,
            desc: `The rotational velocity to rotate`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `The time to rotate in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `acceleration time`,
            desc: `The time spent accelerating in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `deceleration time`,
            desc: `The time spent decelerating in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `RotateYaw`,
    desc: `Rotate this entity to the given yaw`,
    example: ``,
    callOn: `script_model, script_origin or script_brushmodel`,
    returnType: ``,
    module: `Motion`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `yaw angle`,
            desc: `The new yaw angle in degrees`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `The time to rotate in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `acceleration time`,
            desc: `The time spent accelerating in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `deceleration time`,
            desc: `The time spent decelerating in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Solid`,
    desc: `Set the solid flag, so that this object is collidable.`,
    example: `self Solid();`,
    callOn: `script_brushmodel`,
    returnType: ``,
    module: `Motion`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `script_brushmodel`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `Vibrate`,
    desc: `Causes a script entity to vibrate, rotating around its origin, along a given vector dir`,
    example: `self Vibrate( directionVir, 0.3, 0.4, 1.0 );`,
    callOn: ``,
    returnType: ``,
    module: `Motion`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `direction vector`,
            desc: `The direction of the vibration`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `amplitude`,
            desc: `The amount of the vibration in degrees`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `period`,
            desc: `The period of the vibration in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `The length of time of the vibration in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Objective_Add`,
    desc: `Adds a new objective`,
    example: `Objective_Add( objective_number, "active", objective_text, (closest.bomb.origin) );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `objective_number`,
            desc: `The number of the objective to add`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `state`,
            desc: `A string value representing the state of the objective. Valid states are "empty", "active", "invisible", "done", "current" and "failed"`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `text`,
            desc: `The text to use for the objective. This should be a valid localized text reference`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `position`,
            desc: `The position of the objective`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `iconshader`,
            desc: `The objective icon to embed`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Objective_AdditionalCurrent`,
    desc: `Add additional objective(s) to the set of objectives currently being done. If none specified, there's no effect.Current objectives that are not specified are not affected by this call. Meant to be used when there are already current objective(s), but one or more additional objectives need to be made current in addition to the previously current objectives.`,
    example: `Objective_AdditionalCurrent( level.flakObjectiveID );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `objective_index`,
            desc: `The ID of the objective to set current`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `objective_index`,
            desc: `Any number of additional IDs to set current`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Objective_AdditionalPosition`,
    desc: `Set an additional position for objectives with multiple positions`,
    example: `Objective_AdditionalPosition( level.mortarObjNumber, ent.index, nMortarCarrier.origin );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `objective_index`,
            desc: `The ID of the objective to alter`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `position_index`,
            desc: `The position of the objective`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `position`,
            desc: `The position of the objective`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Objective_Current`,
    desc: `Set which objective(s) are currently being done. If none specified, there's no current objective. Current objectives that are not specified to still be current, are set to active.`,
    example: `Objective_Current( aHardpointObjectives[0].obj, aHardpointObjectives[1].obj, aHardpointObjectives[2].obj );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `objective_index`,
            desc: `The ID of the objective to set current`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `objective_index`,
            desc: `Any number of additional IDs to set current`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Objective_Delete`,
    desc: `Removes an objective`,
    example: `Objective_Delete( 1 );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `objective_number`,
            desc: `The number of the objective to remove`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Objective_Icon`,
    desc: `Set the compass icon for an objective`,
    example: `Objective_Icon( 0, game["radio_none"] );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `objective_number`,
            desc: `The ID of the objective to alter`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `icon`,
            desc: `A compass icon`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Objective_OnEntity`,
    desc: `Sets the objective to get its position from an entity.`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `objective_number`,
            desc: `The ID of the objective to alter`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `entity`,
            desc: `The entity to set the objective to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Objective_Position`,
    desc: `Set the position of an objective, assumed to be the zeroth position, must use objective_additionalposition to set a different position index`,
    example: `Objective_Position( 4, get_objective_position( "plant_boilerbomb_trigger" ) );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `objective_number`,
            desc: `The ID of the objective to alter`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `position`,
            desc: `The position of the objective`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Objective_Ring`,
    desc: `Triggers a ring on the objective.`,
    example: `Objective_Ring( level.mortarObjNumber );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `objective_index`,
            desc: `The ID of the ring`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Objective_State`,
    desc: `Sets the state of an objective`,
    example: `Objective_State( 8, "done" );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `objective_number`,
            desc: `The number of the objective to alter`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `state`,
            desc: `A string value representing the state of the objective. Valid states are "empty", "active", "invisible", "done", "current" and "failed"`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Objective_String`,
    desc: `Set the description string for an objective`,
    example: `Objective_String( index, &amp;"SCRIPT_OBJ_DESTROYFLAKPANZERS", level.flaks_remaining );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `objective_number`,
            desc: `The ID of the objective to alter`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `string`,
            desc: `One or more (localised) objective strings`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Objective_String_NoMessage`,
    desc: `Set the description string for an objective, without posting an "objectives updated" message`,
    example: `Objective_String_NoMessage( index, &amp;"SCRIPT_OBJ_DESTROYFLAKPANZERS", level.flaks_remaining );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `objective_number`,
            desc: `The ID of the objective to alter`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `string`,
            desc: `One or more (localised) objective strings`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Objective_Team`,
    desc: `Sets the team that the objective is for. Allows having different objectives for each team`,
    example: `Objective_Team( 0, "allies" );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `objective_number`,
            desc: `The ID of the objective to alter`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `team`,
            desc: `The team that the objective is for. Valid entries are 'allies', 'axis', or 'none'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PingPlayer`,
    desc: `Flashes a player on their teammate's compasses`,
    example: `self PingPlayer();`,
    callOn: `A player`,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: ``,
            desc: `A player`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `RefreshHudAmmoCounter`,
    desc: `Causes the HUD ammo counter and actionslots to show, as if the player had fired or otherwise caused it to show. Will fade out as normal.`,
    example: `RefreshHudAmmoCounter();`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `RefreshHudCompass`,
    desc: `Causes the HUD compass to show, as if the player had moved or otherwise caused it to show. Will fade out as normal.`,
    example: `RefreshHudCompass();`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `Target_ClearReticleLockOn`,
    desc: `Cancels any lock-on sequence on the hud.`,
    example: `Target_ClearReticleLockOn();`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `Target_GetArray`,
    desc: `Gets an array of entities that are set as targets`,
    example: `mytargets = Target_GetArray();`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `Target_IsInCircle`,
    desc: `Returns whether a target is within a given radius from the center of the player's screen`,
    example: `level.player Target_IsInCircle( enemy_chopper, level.player, 65, 100 );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `target entity`,
            desc: `The entity that is the target`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `player`,
            desc: `The player entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `fov`,
            desc: `The player's field of view`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `radius`,
            desc: `radius of the circle, centered at the center of the screen`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Target_IsInRect`,
    desc: `Returns whether a target is within a given rectangle, centered in the center of the player's screen`,
    example: `level.player Target_IsInRect( enemy_chopper, level.player, 65, 100, 100 );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `target entity`,
            desc: `The entity that is the target`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `player`,
            desc: `The player entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `fov`,
            desc: `The player's field of view`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `halfwidth`,
            desc: `half the width of the rectangle`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `halfheight`,
            desc: `half the height of the rectangle`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Target_IsTarget`,
    desc: `Returns whether an entity has been marked as a target`,
    example: `if ( Target_IsTarget( foundEnt ) ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `The entity to check`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Target_Remove`,
    desc: `Removes a target`,
    example: `Target_Remove( enemy_chopper );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `target entity`,
            desc: `The entity that is the target`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Target_Set`,
    desc: `Adds a new target to draw on the hud`,
    example: `Target_Set( enemy_chopper );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `target entity`,
            desc: `The entity that is the target`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `target offset`,
            desc: `The offset of the target position from the entity's origin`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Target_SetAttackMode`,
    desc: `Sets how missiles and rockets should approach the target.`,
    example: `Target_SetAttackMode( enemy_tank, "top" );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `target entity`,
            desc: `The entity that is the target`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `mode name`,
            desc: `"top" or "direct"`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Target_SetJavelinOnly`,
    desc: `Target will only draw on player's hud when they are looking through the Javelin-weapon's site.`,
    example: `Target_SetJavelinOnly( enemy_tank, true );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `target entity`,
            desc: `The entity that is the target`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `mode name`,
            desc: `"top" or "direct"`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Target_SetOffscreenShader`,
    desc: `Sets the material that is used when a target clamps to the edge of the screen. The target must have already been created with target_set()`,
    example: `Target_SetOffscreenShader( enemy_chopper, "arrow" );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `target entity`,
            desc: `The entity that is the target`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `materialname`,
            desc: `The shader for the quad drawn over the target`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Target_SetShader`,
    desc: `Changes the material of a target. The target must have already been created with target_set()`,
    example: `Target_SetShader( enemy_chopper, "locked_on_shader" );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `target entity`,
            desc: `The entity that is the target`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `materialname`,
            desc: `The shader for the quad drawn over the target`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Target_StartReticleLockOn`,
    desc: `Begins the lock-on sequence for the target on the hud. This affects the animation of the vehicle reticle.`,
    example: `Target_StartReticleLockOn( enemy_chopper, 4 );`,
    callOn: ``,
    returnType: ``,
    module: `Objective`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `target entity`,
            desc: `The entity that is the target`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `duration`,
            desc: `The amount of time between now and fully locked-on, in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PhysicsExplosionCylinder`,
    desc: `Imparts a 1-frame impulse on physics objects radially outward in a cylinder (i.e., all the added forces are parallel to the ground). This can be used to simulate wind from a helicopter.`,
    example: `PhysicsExplosionCylinder( origin, 50, 40, 1 );`,
    callOn: ``,
    returnType: ``,
    module: `Physics`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `center`,
            desc: `The world position of the center of the cylinder`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `outer radius`,
            desc: `The radius beyond which the force is zero`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `inner radius`,
            desc: `The radius within which the force is maximum`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `magnitude`,
            desc: `The strength of the force.  1 = the default explosion`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PhysicsExplosionSphere`,
    desc: `Imparts a 1-frame explosion impulse on physics objects, similar to a grenade.`,
    example: `PhysicsExplosionSphere( origin, 100, 80, 1 );`,
    callOn: ``,
    returnType: ``,
    module: `Physics`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `position of effect`,
            desc: `The world position of the center of the explosion`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `outer radius`,
            desc: `The radius beyond which the force is zero`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `inner radius`,
            desc: `The radius within which the force is maximum`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `magnitude`,
            desc: `The strength of the force. 1 = the default explosion`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PhysicsJitter`,
    desc: `Jitters physics objects touching the ground. Jitter forces are calculated in such a way as to displace the object upwards some height between min and max displacement at each point of contact with the ground.`,
    example: `PhysicsJitter( origin, 200, 150, 1.0, 5.0 );`,
    callOn: ``,
    returnType: ``,
    module: `Physics`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `center`,
            desc: `The world position of the center of the cylinder`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `outer radius`,
            desc: `The radius beyond which the displacement is zero`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `inner radius`,
            desc: `The radius within which the displacement is maximum`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `min displacement`,
            desc: `Approximate minimum distance each contact point will be displaced`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `max displacement`,
            desc: `Approximate maximum distance each contact point will be displaced`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PhysicsJolt`,
    desc: `Imparts a 1-frame randomly-jittered impulse on physics objects in a radius.`,
    example: `PhysicsJolt( origin, 200, 150, (0.01, 0.01, 0.2) );`,
    callOn: ``,
    returnType: ``,
    module: `Physics`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `center`,
            desc: `The world position of the center of the cylinder`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `outer radius`,
            desc: `The radius beyond which the force is zero`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `inner radius`,
            desc: `The radius within which the force is maximum`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `force`,
            desc: `A vector giving the direction and magnitude of the force of the explosion`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetPhysicsGravityDir`,
    desc: `Sets the direction of gravity for physics.`,
    example: `SetPhysicsGravityDir( (0,0,1) );`,
    callOn: ``,
    returnType: ``,
    module: `Physics`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `direction`,
            desc: `The direction that gravity will pull (i.e., "down").  Set to (0,0,-1) for normal gravity behavior`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AdsButtonPressed`,
    desc: `Check if the player is pressing the 'ads' button.`,
    example: `while( self AdsButtonPressed() )...`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `AllowAds`,
    desc: `Sets whether the player can switch to ADS`,
    example: `level.player AllowAds( false );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player ads`,
            desc: `: A boolean. true if the player can switch to ADS, and false otherwise`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AllowJump`,
    desc: `Sets whether the player can jump`,
    example: `level.player AllowJump(false);`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player jump`,
            desc: `: A boolean. True if the player can jump, and false otherwise`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AllowLean`,
    desc: `Sets whether the player can lean`,
    example: `level.player AllowLean( false );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `player lean`,
            desc: `: A boolean. true if the player can lean, and false otherwise`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AllowMelee`,
    desc: `Sets whether the player can melee`,
    example: `level.player AllowMelee(false);`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `melee`,
            desc: `: A boolean. True if the player can melee, and false otherwise`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AllowSprint`,
    desc: `Sets whether the player can sprint`,
    example: `level.player AllowSprint(false);`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player sprint`,
            desc: `: A boolean. True if the player can sprint, and false otherwise`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AnyAmmoForWeaponModes`,
    desc: `Returns true if the player has any ammo available for the weapon or any of it's alt-modes (grenade launcher, etc).`,
    example: `if ( level.player AnyAmmoForWeaponModes( "m4_grenadier" ) ) [...]`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `: (string) The weapon name for this weapon`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AttackButtonPressed`,
    desc: ``,
    example: `if ( self AttackButtonPressed() ) ...`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `ButtonPressed`,
    desc: `Check if the host is pressing the button/key, "BUTTON_A", "BUTTON_B", "K`,
    example: `while( self ButtonPressed( "BUTTON_A" ) ) ...`,
    callOn: `The player (it will only check the host player's buttons though)`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: ``,
            desc: `The player (it will only check the host player's buttons though)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `buttonName`,
            desc: `Button name, for example "BUTTON_A", "BUTTON_B", "K", ...`,
            type: `string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ClearPerks`,
    desc: `removes all perks for a player`,
    example: `player ClearPerks();`,
    callOn: `A player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `CloseMenu`,
    desc: `Close the current player menu`,
    example: `player CloseMenu();`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `DeactivateChannelVolumes`,
    desc: `deactivate the channel volumes for the player on the given priority level`,
    example: `level.player DeactivateChannelVolumes( "snd_enveffectsprio_level", 3 );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `priority`,
            desc: `: Valid priorities are "snd_channelvolprio_holdbreath", "snd_channelvolprio_pain", or "snd_channelvolprio_shellshock"`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `fade time`,
            desc: `: the time spent fading to the next lowest active channelvol priority level in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `DeactivateEq`,
    desc: `Deactivate the specified eq filter for the specified band`,
    example: `level.player DeactivateEq( 0, "local", 0 );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `eqIndex`,
            desc: `: which eq index to deactivate (0,1)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `channelName`,
            desc: `: the name of the channel.  channel names are specified in "channels.def"`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `band`,
            desc: `: select which band to disable.  There are currently three bands (0,1,2)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `DeactivateReverb`,
    desc: `deactivate the sound reverberation for the player on the given priority level`,
    example: `level.player DeactivateReverb( "snd_enveffectsprio_level", 3 );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `priority`,
            desc: `: Valid priorities are "snd_enveffectsprio_level" or "snd_enveffectsprio_shellshock"`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `fade time`,
            desc: `: the time spent fading to the next lowest active reverb priority level in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `DisableInvulnerability`,
    desc: `Makes player vulnerable to damage. This is default behavior`,
    example: `level.player DisableInvulnerability();`,
    callOn: `A Player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `DisableTurretDismount`,
    desc: `Do not let player unstick themselves from a turret that they are using.`,
    example: `level.player DisableTurretDismount();`,
    callOn: `A Player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `EnableInvulnerability`,
    desc: `Makes player invulnerable to damage`,
    example: `level.player EnableInvulnerability();`,
    callOn: `A Player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `EnableTurretDismount`,
    desc: `Player can dismount from turrets as normal.`,
    example: `level.player EnableTurretDismount();`,
    callOn: `A Player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `FragButtonPressed`,
    desc: ``,
    example: `if ( self FragButtonPressed() ) ...`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `FreezeControls`,
    desc: `Blocks or unblocks control input from this player`,
    example: `level.player freezeControls( true );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `freeze state`,
            desc: `: true if the player's controls are frozen, false otherwise`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetCurrentOffhand`,
    desc: `Gets the player's current off-hand weapon( usually a grenade).`,
    example: `currentweapon = level.player GetCurrentOffhand();`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetCurrentWeapon`,
    desc: `Gets the players current weapon.`,
    example: `currentweapon = level.player GetCurrentWeapon();`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetCurrentWeaponClipAmmo`,
    desc: `Gets the amount of ammo left in the player's clip.`,
    example: `bulletCnt = level.player GetCurrentWeaponClipAmmo();`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetFractionMaxAmmo`,
    desc: `Return the player's current ammunition amount as a fraction of the weapon's maximum ammunition`,
    example: `self GetFractionMaxAmmo( "m4_grenadier" );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name (a string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetFractionStartAmmo`,
    desc: `Return the player's current ammunition amount as a fraction of the weapon's starting ammunition`,
    example: `self GetFractionStartAmmo( "mosin_nagant" );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name (a string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetOffhandSecondaryClass`,
    desc: `Gets the name (either "smoke" or "flash") that toggle is set to.`,
    example: `if ( "flash" == level.player GetOffhandSecondaryClass() )...`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetPlayerAngles`,
    desc: `Get the player's angles`,
    example: `angles = level.player GetPlayerAngles();`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetPlayerViewHeight`,
    desc: `Get the player's view height`,
    example: `height = level.player GetPlayerViewHeight();`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetStance`,
    desc: `Gets the stance of the player. It only works for the player. Possible return values are 'crouch', 'prone' and 'stand'`,
    example: `if ( level.player GetStance() == "crouch") )...`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetVelocity`,
    desc: `Gets the player's velocity`,
    example: `vel = level.player GetVelocity();`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetWeaponAmmoClip`,
    desc: `Get the amount of ammo left in the player's weapon's current clip.`,
    example: `clipCount = level.player GetWeaponAmmoClip( "uzi" );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `: (string) The weapon name for this weapon`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetWeaponAmmoStock`,
    desc: `Get the ammunition stockpile for the given weapon.`,
    example: `clipCount = level.player GetWeaponAmmoStock( "m4_grenadier" );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `: (string) The weapon name for this weapon`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetWeaponsList`,
    desc: `Gets an array of all weapons that the player has. Includes any alt-mode weapons (ex: m203_m4)`,
    example: `weapList = level.player GetWeaponsList();`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetWeaponsListPrimaries`,
    desc: `Gets an array of all primary weapons that the player has.`,
    example: `weapList = level.player GetWeaponsListPrimaries();`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GiveMaxAmmo`,
    desc: `Set the player's ammunition to the weapon's maximum ammunition`,
    example: `self GiveMaxAmmo( self.pers["weapon"] );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name (a string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GiveStartAmmo`,
    desc: `Set the player's ammunition to the weapon's default starting ammunition`,
    example: ``,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name (a string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GiveWeapon`,
    desc: `Give the player a weapon.`,
    example: `level.player giveWeapon("m1garand");`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name to give to the player`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `HasPerk`,
    desc: `test if player has a perk`,
    example: `player HasPerk( "specialty_gpsjammer" );`,
    callOn: `A player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `perk name`,
            desc: `the perk to check`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `HasWeapon`,
    desc: `Checks whether the player has the given weapon.`,
    example: `if( level.player HasWeapon( "Panzerfaust" ) ) [...]`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name (a string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `HideViewModel`,
    desc: `Hide the player's current view model.`,
    example: `level.player HideViewModel();`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `IsLookingAt`,
    desc: `Returns true if the entity is the same as the player's lookat entity.`,
    example: `level.player islookingat( trigger );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `: An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsMeleeing`,
    desc: `Returns true if the player is currently meleeing`,
    example: `level.player IsMeleeing();`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsOnGround`,
    desc: `Returns true if the player is on the ground.`,
    example: `if( player IsOnGround() );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsThrowingGrenade`,
    desc: `Returns true if the player is currently throwing a grenade`,
    example: `level.player IsThrowingGrenade();`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `MeleeButtonPressed`,
    desc: ``,
    example: `if ( self MeleeButtonPressed() ) ...`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `NotifyOnCommand`,
    desc: `Whenever the console command processor encounters &lt;command&gt; for any reason, it will notify script with the string &lt;notify&gt; on the player entity. Additionally, it will pass the arguments to the notify as strings, where the first argument is the initiating command.`,
    example: `player NotifyOnCommand( "changeweapon", "weapnext" ); waittill "changeweapon";`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `OpenMenu`,
    desc: `Open a menu for this player`,
    example: `self OpenMenu( game["menu_weapon_allies_only"] );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `menu`,
            desc: `: A string. The name of the menu to open`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `OpenMenuNoMouse`,
    desc: `Open a menu for this player, with no mouse control.`,
    example: `self OpenMenuNoMouse( game["menu_weapon_allies_only"] );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `menu`,
            desc: `: A string. The name of the menu to open`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlayerAds`,
    desc: `Return the player's weapon position fraction.`,
    example: `while( self PlayerAds() &gt; 0.3 )...`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlayerLinkTo`,
    desc: `Attaches the player to an entity. Any entity rotation is added to the player's view, allow the player to look around. Rotating the parent entity/tag will not move the player's eye position, but only the player's view angles. Thus, the player's eye position is locked in place, always directly above the parent tag.`,
    example: `level.player PlayerLinkTo( vehicle, "tag_player", 0.5 );`,
    callOn: `A Player Entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `linkto entity`,
            desc: `The entity to attach the player to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `tag`,
            desc: `The tag to attach the player to`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `view fraction`,
            desc: `How much the change in the tag's rotation effects the players view.  Defaults to 0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `right arc`,
            desc: `Angle to clamp view to the right.  Defaults to 180`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `left arc`,
            desc: `Angle to clamp view to the left.  Defaults to 180`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `top arc`,
            desc: `Angle to clamp view to the top.  Defaults to 180`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `bottom arc`,
            desc: `Angle to clamp view to the bottom.  Defaults to 180`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `collide`,
            desc: `true/false: Whether the player is to collide with geo, preventing the player from entering solid (but will try to keep the player as close as possible to the parent)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlayerLinkToAbsolute`,
    desc: `Attaches the player to an entity. No view movement is allowed. The player's eye position will remain fixed relative to the parent entity/tag. Thus, pitching and rolling will cause the player's eye position to move. (But the player entity always remains vertical)`,
    example: `level.player PlayerLinkToAbsolute( vehicle, "tag_player" );`,
    callOn: `A Player Entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `lockto entity`,
            desc: `The entity to attach the player to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `tag`,
            desc: `The tag to attach the player to`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlayerLinkToDelta`,
    desc: `Attaches the player to an entity. Any entity rotation is added to the player's view, allow the player to look around. The player's eye position will remain fixed relative to the parent entity/tag. Thus, pitching and rolling will cause the player's eye position to move. (But the player entity always remains vertical)`,
    example: `level.player PlayerLinkToDelta( vehicle, "tag_player", 0.5 );`,
    callOn: `A Player Entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `linkto entity`,
            desc: `The entity to attach the player to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `tag`,
            desc: `The tag to attach the player to`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `view fraction`,
            desc: `How much the change in the tag's rotation effects the players view.  Defaults to 0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `right arc`,
            desc: `Angle to clamp view to the right.  Defaults to 180`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `left arc`,
            desc: `Angle to clamp view to the left.  Defaults to 180`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `top arc`,
            desc: `Angle to clamp view to the top.  Defaults to 180`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `bottom arc`,
            desc: `Angle to clamp view to the bottom.  Defaults to 180`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `use tag angles`,
            desc: `Determines how the player's view will be tilted.  'False' (default) means that the orientation of the tag when the player is linked will appear flat to the player.  Any rotation from that orientation will tilt the player's view. 'True' means that only a tag angles of (0,0,0) will appear flat to the player.  Any rotation from (0,0,0) will tilt the player's view`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlayerSetGroundReferenceEnt`,
    desc: `The ground entity's rotation will be added onto the player's view. In particular, this will cause the player's yaw to rotate around the entity's z-axis instead of the world z-axis. You only need to call this function once. After that, any rotation that the reference entity undergoes will affect the player. Call this command again with undefined to turn it off.`,
    example: `level.player PlayerSetGroundReferenceEnt( seaEnt );`,
    callOn: `A Player Entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `ground reference entity`,
            desc: `The entity used to rotate the player's view`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlayLocalSound`,
    desc: `Plays a sound locally to the player`,
    example: `players[i] PlayLocalSound( "MP_announcer_round_draw" );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `sound name`,
            desc: `: The name of the sound to play`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `notification string`,
            desc: `If present, the sound will notify this string on this player when done. (Single player only)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `stoppable flag`,
            desc: `If present and true, then this sound can be interrupted by another playlocalsound command with notification string.  It is a script error for a playsound that does not have this flag set to get interrupted by another playlocalsound with notify, or for a playlocalsound with notify that does not have this flag set to interrupt another playlocalsound with notify. (Single player only)"`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ResetSpreadOverride`,
    desc: `Resets the player spread value to the ones of the weapon in use.`,
    example: `level.player ResetSpreadOverride();`,
    callOn: `A player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `SecondaryOffhandButtonPressed`,
    desc: ``,
    example: `if ( self SecondaryOffhandButtonPressed() ) ...`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `SetActionSlot`,
    desc: `Sets the option to perform when the player executes (for example) "+actionslot 1".`,
    example: `level.player SetActionSlot( 1, "altmode" ); //switch between attached m203 grenade launcher, if available level.player SetActionSlot( 2, "nightvision" ); //toggle nightvision on and off level.player SetActionSlot( 4, "weapon", "c4" ); level.player SetActionSlot( 3, "" );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `arg1`,
            desc: `<slot #>: 1 through 4, corresponding to bindings "+actionslot 1" through "+actionslot 4`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `option name`,
            desc: `: valid choices are "weapon", "nightVision", "altMode", and "" (blank)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `extra parameter`,
            desc: `: Used by the "weapon" option, the name of the weapon to switch to`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetAutoPickup`,
    desc: `Sets whether the player will automatically pick up pickups.`,
    example: `level.player SetAutoPickup( true );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `auto pickup`,
            desc: `: (boolean) true if the player will automatically pickup pickups`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetChannelVolumes`,
    desc: `Set the channel volumes for the player (a way of fading volumes by type)`,
    example: `level.player SetChannelVolumes( "snd_channelvolprio_pain", "pain", 1, .7, 3 );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `priority`,
            desc: `: Valid priorities are "snd_channelvolprio_holdbreath", "snd_channelvolprio_pain", or "snd_channelvolprio_shellshock"`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `shock name`,
            desc: `: string describing the name of the .shock file w/ the channel volumes values to use`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `fade time`,
            desc: `: in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetClientDvar`,
    desc: `Set the values of dvars which are specific to each client.`,
    example: `self SetClientDvar( "cg_drawhud", "0" );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `dvarName`,
            desc: `: The name of a dvar.  Valid dvar names: "cg_drawhud"`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `value`,
            desc: `: The the value to which the dvar will be set`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetClientDvars`,
    desc: `Set the values of a list of dvars which are specific to each client.`,
    example: `self SetClientDvars( "cg_drawhud", "0", "cg_draw2d", "0" );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `dvarName`,
            desc: `: The name of a dvar.  Valid dvar names: "cg_drawhud"`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `value`,
            desc: `: The the value to which the dvar will be set`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetDepthOfField`,
    desc: `Set the depth of field values for a player. If start &gt;= end for near or far, depth of field is disabled for that region.`,
    example: `self SetDepthOfField( 10, 80, 1000, 7000, 5, 1.5 );`,
    callOn: `<player>`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `near start`,
            desc: `Before this distance, near depth of field is maximally blurry`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `near end`,
            desc: `After this distance, near depth of field is perfectly in focus`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `far start`,
            desc: `Before this distance, far depth of field is perfectly in focus`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `far end`,
            desc: `After this distance, far depth of field is maximally blurry`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `near blur`,
            desc: `Maximal blur radius for near depth of field, in pixels at 640x480`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `far blur`,
            desc: `Maximal blur radius for far depth of field, in pixels at 640x480`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetEq`,
    desc: `Set a parametric filter for the player on a specified channel`,
    example: `level.player SetEq( "ambient", 0, "bell", 3, 1000, 2.1 );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `channel`,
            desc: `: the name of the audio channel to apply the eq to`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `eqIndex`,
            desc: `: the eq index to use (0 and 1)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `band`,
            desc: `: select which band, there are currently two bands (0 and 1)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `filter type`,
            desc: `: the type of filter to apply ("lowpass", "highpass", "lowshelf", "highshelf", "bell" )`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `gain`,
            desc: `: the gain in dB.  Has no effect on "lowpass" or "highpass`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `frequency`,
            desc: `: the "important" frequency, between 0 and 20 kHZ.  enter value in Hz`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `q`,
            desc: `: the quality factor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetEqLerp`,
    desc: `Set the blend amount for the specified eqIndex, for eqIndex 0 if none is specified. Automatically sets the blend amount of the other eqIndex to 1-eqLerp.`,
    example: `level.player SetEqLerp( 0.25, 1 ); // now using 25% of eq 1 and 75% of eq 0.`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `eqLerp`,
            desc: `: float value from 0 to 1, percentage of specified eqIndex, 0 if none specified`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `eqIndex`,
            desc: `: the eq index to use (0 and 1)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetMoveSpeedScale`,
    desc: `Scales player movement speed by this amount`,
    example: `self SetMoveSpeedScale( 1.5 );`,
    callOn: `A Player Entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `scale`,
            desc: `The amount to scale player movement`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetOffhandSecondaryClass`,
    desc: `Set whether player can use smoke grenades or flashbangs.`,
    example: `level.player SetOffhandSecondaryClass( "flash" );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `name`,
            desc: `Either "smoke" or "flash"`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetOrigin`,
    desc: `Set the player's origin`,
    example: `level.player SetOrigin( pltruck.origin );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player origin`,
            desc: `The player's origin (a point)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetPerk`,
    desc: `give the specified perk`,
    example: `player SetPerk( "specialty_gpsjammer" );`,
    callOn: `A player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `perk name`,
            desc: `the perk to give`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetPlayerAngles`,
    desc: `Set the player's angles`,
    example: `level.player SetPlayerAngles( (0, 240, 0) );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player angles`,
            desc: `The player's angles in degrees`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetReverb`,
    desc: `Set the sound reverberation for the player`,
    example: `level.player SetReverb( "snd_enveffectsprio_level", "stoneroom", 1, .7, 3 );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `priority`,
            desc: `: Valid priorities are "snd_enveffectsprio_level", or "snd_enveffectsprio_shellshock"`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `room type`,
            desc: `: string describing the type of reverb`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `dry level`,
            desc: `: a float from 0 (no source sound) to 1 (full source sound)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `wet level`,
            desc: `: a float from 0 (no effect) to 1 (full effect)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `fade time`,
            desc: `: in seconds and modifies drylevel and wetlevel`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetSpreadOverride`,
    desc: `Sets the player fixed spread value`,
    example: `level.player SetSpreadOverride( 30 );`,
    callOn: `A player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player spread`,
            desc: `: An integer. It will override all the spread values (min, max, stand, crouch, prone) no matter which weapon is in use`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetStance`,
    desc: `Sets the stance of the player. It only works for the player. Possible values are 'crouch', 'prone' and 'stand'`,
    example: `level.player SetStance( "stand" );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetVelocity`,
    desc: `Set the player's velocity`,
    example: `level.player SetVelocity( -400, 0, 100 );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `player velocity`,
            desc: `The player's velocity (a vector)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetViewModel`,
    desc: `Set the player's current view model.`,
    example: `self SetViewModel( "viewmodel_hands_russian_vetrn" );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `viewmodel name`,
            desc: `: A viewmodel (string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetViewModelDepthOfField`,
    desc: `Set the depth of field values for the player's viewmodel when at hip. If start &gt;= end, depth of field is disabled.`,
    example: `self SetViewModelDepthOfField( 2, 10 );`,
    callOn: `<player>`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `start`,
            desc: `Before this distance, depth of field is maximally blurry`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `end`,
            desc: `After this distance, depth of field is perfectly in focus`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetWeaponAmmoClip`,
    desc: `Set the weapon clip ammunition for the given weapon.`,
    example: `level.player SetWeaponAmmoClip( "m16", 30 );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `: (string) The weapon name for this weapon`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `ammunition`,
            desc: `: (integer) The amount of ammunition in the clip`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetWeaponAmmoStock`,
    desc: `Set the ammunition stockpile for the given weapon.`,
    example: `level.player SetWeaponAmmoStock( "m16", 300 );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `: (string) The weapon name for this weapon`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `ammunition`,
            desc: `: (integer) The amount of ammunition in the stockpile`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ShellShock`,
    desc: `Start a shell shock sequence for the player. The shell shock must be precached, otherwise calling this script will cause a script error.`,
    example: `self ShellShock( "death", 5 );`,
    callOn: `<player>`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `shellshockname`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `duration`,
            desc: `duration in seconds. The duration must be between 0 and 60 seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `overrideCheat`,
            desc: `Certain player cheats can disable this function, set this true to force the issue`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ShowViewModel`,
    desc: `Show the player's current view model.`,
    example: `level.player ShowViewModel();`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `StopLocalSound`,
    desc: `Stops all instances of a local soundalias running on a player.`,
    example: `level.player StopLocalSound( "annoying_siren" );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `sound name`,
            desc: `: The name of the sound to stop`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `StopShellShock`,
    desc: `Stop a shell shock sequence for the player`,
    example: `self StopShellShock();`,
    callOn: `<player>`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `SwitchToOffhand`,
    desc: `Switch the player's offhand weapon`,
    example: ``,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name (a string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SwitchToWeapon`,
    desc: `Switch to a different weapon`,
    example: `level.player SwitchToWeapon( "mosin_nagant" );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name (a string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `TakeAllWeapons`,
    desc: `Remove all the weapons from the player.`,
    example: `level.player TakeAllWeapons();`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `TakeWeapon`,
    desc: `Take a weapon from the player.`,
    example: `level.player TakeWeapon( "m16_grenadier" );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name to take from the player`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `UnSetPerk`,
    desc: `takes the specified perk from the player`,
    example: `player UnSetPerk( "specialty_gpsjammer" );`,
    callOn: `A player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `perk name`,
            desc: `the perk to unset`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `UploadScore`,
    desc: `Upload arcade mode score to XBLIVE leaderboards`,
    example: `level.player UploadScore( 0, 100 );`,
    callOn: `A Player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `mission`,
            desc: `: mission index`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `score`,
            desc: `: score for that mission`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `UploadTime`,
    desc: `Upload a time to XBLIVE leaderboards`,
    example: `level.player UploadTime( 19, 15.2 );`,
    callOn: `A Player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `mission`,
            desc: `: mission index`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `: time for this mission`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `UseButtonPressed`,
    desc: ``,
    example: `if ( self UseButtonPressed() ) ...`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `ViewKick`,
    desc: `Damage the player, and throw the screen around`,
    example: `level.player ViewKick( 127, level.player.origin );`,
    callOn: `<player>`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `force`,
            desc: `The force of the kick, from 0 to 127`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `source`,
            desc: `the source of the kick`,
            type: `a point`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `WeaponLockFinalize`,
    desc: `Locks player's weapon onto an entity. Implies WeaponLockStart(), so this may be called to jump to a hard lock.`,
    example: `level.player WeaponLockFinalize( enemyGuy );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `: An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `WeaponLockFree`,
    desc: `Clears player's weapon lock.`,
    example: `level.player WeaponLockClear();`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `WeaponLockNoClearance`,
    desc: `When set true, the player will be unable to fire their lockon weapon, and will recieve a hint print telling them that there is an obstruction.`,
    example: `level.player WeaponLockNoClearance( true );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `bool`,
            desc: `: true or false`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `WeaponLockStart`,
    desc: `Begins player's weapon lockon sequence (hud effects, etc). Will clear any existing hard lock. Use WeaponLockFinalize() to complete lock.`,
    example: `level.player WeaponLockStart( enemyGuy );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `: An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `WeaponLockTargetTooClose`,
    desc: `When set true, the player will be unable to fire their lockon weapon, and will recieve a hint print telling them that they are too close.`,
    example: `level.player WeaponLockTargetTooClose( true );`,
    callOn: `The player`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `bool`,
            desc: `: true or false`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PreCacheHeadIcon`,
    desc: `precache a head icon.`,
    example: `PreCacheHeadIcon( game["headicon_allies"] );`,
    callOn: ``,
    returnType: ``,
    module: `Precache`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `head icon name`,
            desc: `The name of the head icon`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PreCacheItem`,
    desc: `Precaches the given item. It must be called before any wait statements in the level script.`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Precache`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `item name`,
            desc: `The name of the item to precache`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PreCacheLocationSelector`,
    desc: `precaches a material to be used as an indicator during location selection on the map.`,
    example: `PreCacheLocationSelector( "map_crosshair" );`,
    callOn: ``,
    returnType: ``,
    module: `Precache`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `material name`,
            desc: `The name of the material to be precached`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PrecacheMenu`,
    desc: `precache this menu`,
    example: `PrecacheMenu( game["menu_serverinfo"] );`,
    callOn: ``,
    returnType: ``,
    module: `Precache`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `menu`,
            desc: `The menu to load`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PreCacheModel`,
    desc: `Precaches the given model. It must be called before any wait statements in the level script.`,
    example: `PreCacheModel( "prop_panzerfaust_lid" );`,
    callOn: ``,
    returnType: ``,
    module: `Precache`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `model`,
            desc: `The name of the model to precache`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PrecacheNightvisionCodeAssets`,
    desc: `Precaches assets needed by code for the Nightvision features.`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Precache`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `PreCacheRumble`,
    desc: `Precaches the given rumble. It must be called before any wait statements in the level script.`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Precache`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `rumble`,
            desc: `The name of the rumble to precache`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PreCacheShader`,
    desc: `Precaches the given shader. It must be called before any wait statements in the level script.`,
    example: `PreCacheShader( "artillery_firing" );`,
    callOn: ``,
    returnType: ``,
    module: `Precache`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `material name`,
            desc: `The name of the shader to precache`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PreCacheShellShock`,
    desc: `Precaches the shellshock effect. It must be called before any wait statements in the level script.`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Precache`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `shellshock effect name`,
            desc: `The name of the shellshock effect to precache`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PreCacheStatusIcon`,
    desc: `precache a status icon.`,
    example: `PreCacheStatusIcon( "hud_status_dead" );`,
    callOn: ``,
    returnType: ``,
    module: `Precache`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `status icon name`,
            desc: `the name of the status icon`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PreCacheString`,
    desc: `Precaches the given string. It must be called before any wait statements in the level script.`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Precache`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `string`,
            desc: `The name of the string to precache`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PreCacheTurret`,
    desc: `Precaches the weapon info structure for the turret. Must be called before any wait statements in the level script`,
    example: `PreCacheTurret( "mg42_tank_tiger" );`,
    callOn: ``,
    returnType: ``,
    module: `Precache`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `turretInfo`,
            desc: `The turret info name (string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PrecacheVehicle`,
    desc: `Precaches the weapon info structure for the turret on the vehicle. Must be called before any wait statements in the level script`,
    example: `node = PrecacheVehicle( "mg42_tank_tiger" );`,
    callOn: ``,
    returnType: ``,
    module: `Precache`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `vehicleInfo`,
            desc: `The vehicle info name (string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Scr_TableLookupIString`,
    desc: `look up a row in a table and pull out a particular column from that row in an Istring`,
    example: `TableLookupIString( "mp/statstable.csv", 0, "INDEX_KILLS", 1 );`,
    callOn: ``,
    returnType: ``,
    module: `Precache`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `filename`,
            desc: `The table to look up`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `search column num`,
            desc: `The column number of the stats table to search through`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `search value`,
            desc: `The value to use when searching the <search column num>`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `return value column num`,
            desc: `The column number value to return after we find the correct row`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `TableLookup`,
    desc: `look up a row in a table and pull out a particular column from that row`,
    example: `TableLookup( "mp/statstable.csv", 0, "INDEX_KILLS", 1 );`,
    callOn: ``,
    returnType: ``,
    module: `Precache`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `filename`,
            desc: `The table to look up`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `search column num`,
            desc: `The column number of the stats table to search through`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `search value`,
            desc: `The value to use when searching the <search column num>`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `return value column num`,
            desc: `The column number value to return after we find the correct row`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlayRumbleLoopOnEntity`,
    desc: `Plays a looping controller rumble on the given player.`,
    example: `self PlayRumbleLoopOnEntity( "tank_rumble" );`,
    callOn: `Entity`,
    returnType: ``,
    module: `Rumble`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `rumble name`,
            desc: `The name of the rumble to play`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlayRumbleLoopOnPosition`,
    desc: `Plays a looping rumble at a given position.`,
    example: `PlayRumbleLoopOnPosition( "artillery_quake", level.player.origin );`,
    callOn: ``,
    returnType: ``,
    module: `Rumble`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `rumble name`,
            desc: `The name of the rumble to play`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `position`,
            desc: `The position of the rumble`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlayRumbleOnEntity`,
    desc: `Plays a rumble on the given entity.`,
    example: `self PlayRumbleOnEntity( "damage_heavy" );`,
    callOn: `Entity`,
    returnType: ``,
    module: `Rumble`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `rumble name`,
            desc: `The name of the rumble to play`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlayRumbleOnPosition`,
    desc: `Plays a rumble at a given position.`,
    example: `PlayRumbleOnPosition( "artillery_quake", level.player.origin );`,
    callOn: ``,
    returnType: ``,
    module: `Rumble`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `rumble name`,
            desc: `The name of the rumble to play`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `position`,
            desc: `The position of the rumble`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `StopAllRumbles`,
    desc: `Stops all of the current rumbles.`,
    example: `StopAllRumbles();`,
    callOn: ``,
    returnType: ``,
    module: `Rumble`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `StopRumble`,
    desc: `Quits the playing of a particular rumble on a player.`,
    example: `self StopRumble( "tank_rumble" );`,
    callOn: `A player`,
    returnType: ``,
    module: `Rumble`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `rumble name`,
            desc: `The name of the rumble to stop`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `CommitSave`,
    desc: `commits the current save in the save buffer.`,
    example: `CommitSave(id);`,
    callOn: ``,
    returnType: ``,
    module: `Save`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `saveId`,
            desc: `The id of the save to commit`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsSaveRecentlyLoaded`,
    desc: `checks if the current savegame has recently been loaded.`,
    example: `IsSaveRecentlyLoaded();`,
    callOn: ``,
    returnType: ``,
    module: `Save`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `IsSaveSuccessful`,
    desc: `checks if the last saved game was successfully saved.`,
    example: `IsSaveSuccessful();`,
    callOn: ``,
    returnType: ``,
    module: `Save`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `SaveGame`,
    desc: `Save the current game.`,
    example: `SaveGame( ("Chateau" + nodenum), "Documents Obtained" );`,
    callOn: ``,
    returnType: ``,
    module: `Save`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `filename`,
            desc: `The name of the file. If not used then the file will be automatically named. Will throw a script error if multiple saves are attempted in the same frame`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `description`,
            desc: `A description of the savegame`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `screenshot`,
            desc: `The name of the screenshot file. If not used then the file will be automatically named`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `supressPlayerNotify`,
            desc: `When true, player will not get a "Checkpoint Reached" print on their screen`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SaveGameNoCommit`,
    desc: `Save the current game to a memory buffer. Returns an ID for the save. Will throw a script error if multiple saves are attempted in the same frame.`,
    example: `id = SaveGameNoCommit( ("Chateau" + nodenum), "Documents Obtained" );`,
    callOn: ``,
    returnType: ``,
    module: `Save`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `filename`,
            desc: `The name of the file. If not used then the file will be automatically named`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `description`,
            desc: `A description of the savegame`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `screenshot`,
            desc: `The name of the screenshot file. If not used then the file will be automatically named`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `supressPlayerNotify`,
            desc: `When true, player will not get a "Checkpoint Reached" print on their screen`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `CreateThreatBiasGroup`,
    desc: `Create a new threat bias group. If it already exists, do nothing`,
    example: `CreateThreatBiasGroup( "flanking_team" );`,
    callOn: ``,
    returnType: ``,
    module: `Sentient`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `name`,
            desc: `threat bias group name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetAIArray`,
    desc: `Returns an array of the human AI`,
    example: `aiarray = GetAIArray( "axis", "neutral" );`,
    callOn: ``,
    returnType: ``,
    module: `Sentient`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `team`,
            desc: `a team name, either 'axis', 'allies', or 'neutral'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `team`,
            desc: `any number of additional team names may be added, either 'axis', 'allies', or 'neutral'`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetAISpeciesArray`,
    desc: `Returns an array of the AI`,
    example: `aiarray = GetAISpeciesArray( "axis", "all" );`,
    callOn: ``,
    returnType: ``,
    module: `Sentient`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `team`,
            desc: `a team name, either 'axis', 'allies', 'neutral', or 'all'. Defaults to 'all'`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `species`,
            desc: `species of AI to get, 'human', 'dog', or 'all'. Defaults to 'human'`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetClosestEnemySqDist`,
    desc: `Get the distance to the nearest enemy`,
    example: `dist = self GetClosestEnemySqDist();`,
    callOn: `A sentient, either AI or player`,
    returnType: ``,
    module: `Sentient`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `sentient`,
            desc: `An entity that is either the AI or a Player`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetEnemySqDist`,
    desc: `This function is deprecated. use GetClosestEnemySqDist`,
    example: ``,
    callOn: `A sentient, either AI or player`,
    returnType: ``,
    module: `Sentient`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `sentient`,
            desc: `An entity that is either the AI or a Player`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetEye`,
    desc: `Gets the position of the eye for an AI or Player`,
    example: `eyePos = level.player GetEye();`,
    callOn: `<sentient> An entity that is either the AI or a Player`,
    returnType: ``,
    module: `Sentient`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `sentient`,
            desc: `An entity that is either the AI or a Player`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetThreatBias`,
    desc: `Get threat bias of first group against second group`,
    example: `GetThreatBias( "axis", "flanking_team" );`,
    callOn: ``,
    returnType: ``,
    module: `Sentient`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `arg1`,
            desc: `threat bias group for`,
            type: `string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `arg2`,
            desc: `threat bias group against`,
            type: `string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetThreatBiasGroup`,
    desc: `Get the threat bias group of an AI or player`,
    example: `GetThreatBiasGroup();`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Sentient`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsAI`,
    desc: `Checks whether this entity is an ai character`,
    example: `if ( IsAI( gun_owner ) ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Sentient`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity object that may be an ai character`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsAlive`,
    desc: `Checks whether this entity is alive`,
    example: `if ( IsAlive( gun_owner ) ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Sentient`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity object that might be alive or dead`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsGodMode`,
    desc: `Checks whether this entity is in god mode`,
    example: `if ( IsGodMode( level.player ) ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Sentient`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity object to check for god mode`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsPlayer`,
    desc: `Checks whether this entity is the player`,
    example: `if ( IsPlayer( gun_owner ) ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Sentient`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity object that may be the player`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsSentient`,
    desc: `Checks whether this entity is a sentient, that is either an ai character or the player`,
    example: `if ( IsSentient( vehicle.riders[j] ) ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Sentient`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity object that may be a sentient character`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetIgnoreMeGroup`,
    desc: `Make first group ignored by second group`,
    example: `SetIgnoreMeGroup( "flanking_team", "axis" );`,
    callOn: ``,
    returnType: ``,
    module: `Sentient`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `arg1`,
            desc: `ignored group`,
            type: `string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `arg2`,
            desc: `ignoring group`,
            type: `string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetThreatBias`,
    desc: `Set threat bias of first group against second group`,
    example: `SetThreatBias( "axis", "flanking_team", 120 );`,
    callOn: ``,
    returnType: ``,
    module: `Sentient`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `arg1`,
            desc: `threat bias group for`,
            type: `string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `arg2`,
            desc: `threat bias group against`,
            type: `string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `arg3`,
            desc: `threat bias value`,
            type: `int`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetThreatBiasAgainstAll`,
    desc: `Set the threatbias a group has against all others`,
    example: `SetThreatBiasAgainstAll( "flanking_team", 120 );`,
    callOn: ``,
    returnType: ``,
    module: `Sentient`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `arg1`,
            desc: `threat bias group name`,
            type: `string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `arg2`,
            desc: `threat bias value`,
            type: `int`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetThreatBiasGroup`,
    desc: `Set or clear threat bias group of an AI or player`,
    example: `SetThreatBiasGroup( "flanking_team" );`,
    callOn: `<entity>`,
    returnType: ``,
    module: `Sentient`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `arg1`,
            desc: `threat bias group name. If none, remove actor from current threat bias group`,
            type: `string`,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ThreatBiasGroupExists`,
    desc: `Check if a threat bias group exists`,
    example: `ThreatBiasGroupExists( "flanking_team" );`,
    callOn: ``,
    returnType: ``,
    module: `Sentient`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `name`,
            desc: `threat bias group name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AmbientPlay`,
    desc: `Play the given piece of ambient sound.`,
    example: `AmbientPlay( "redsquare_dark" );`,
    callOn: ``,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `ambient`,
            desc: `Sound alias name. Must be a valid sound alias`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `fadetime`,
            desc: `Fade in time in seconds. If not used then the track will start immediately`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AmbientStop`,
    desc: `Stops all ambient sounds (excluding the music track).`,
    example: `AmbientStop( 2 );`,
    callOn: ``,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `fadetime`,
            desc: `Fade out time in seconds. If not used then the sounds will stop immediately`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Amplify`,
    desc: `Amplifies the sound around the origin.`,
    example: `SoundFade( org, 5, 50, 0, 1, 1.2 );`,
    callOn: ``,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `origin`,
            desc: `the location around which to amplify sound`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `min_range`,
            desc: `the minimum distance to begin applying falloff`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `max_range`,
            desc: `the maximum distance of amplification`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `min_volume`,
            desc: `the amount of amplification at max_range`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `max_range`,
            desc: `the amount of amplification with in min_range`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `falloff`,
            desc: `the rate at which amplification falls off (0 means no fall off)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AmplifyStop`,
    desc: `Disables amplification if active (see amplify).`,
    example: `AmplifyStop();`,
    callOn: ``,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `EQOff`,
    desc: ``,
    example: `ai EQOff();`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `EQOn`,
    desc: ``,
    example: `ai EQOn();`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `HasEQ`,
    desc: ``,
    example: `ai HasEQ();`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsWaitingOnSound`,
    desc: `Checks if this entity is waiting on a sound notify`,
    example: `if ( car IsWaitingOnSound() ) ...`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `MusicPlay`,
    desc: `Play the given piece of music.`,
    example: `MusicPlay( "redsquare_dark", false );`,
    callOn: ``,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `music`,
            desc: `The piece to play. Must be a valid sound alias`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `timescale`,
            desc: `Whether this music is effected by timescale changes.  0 for false, nonzero for true.  defaults to true`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `overrideCheat`,
            desc: `Certain player cheats can disable this function, set this true to force the issue`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `MusicStop`,
    desc: `Stop playing music.`,
    example: `MusicStop( 3 );`,
    callOn: ``,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `time`,
            desc: `The time over which the music will fade in seconds. If this option is not present then the music will stop immediately`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `overrideCheat`,
            desc: `Certain player cheats can disable this function, set this true to force the issue`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlayLoopSound`,
    desc: `Play a sound as a loop`,
    example: `car PlayLoopSound( "peugeot_idle_low" );`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `aliasname`,
            desc: `The sound alias to play`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlaySound`,
    desc: `Play the sound alias as if coming from the entity`,
    example: `self PlaySound("Dirt_skid","skidsound",true);`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `aliasname`,
            desc: `The sound alias to play`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `notification string`,
            desc: `If present, the sound will notify this string on this entity when done. (Single player only)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `stoppable flag`,
            desc: `If present and true, then this sound can be interrupted by another playsound command with notification string.  It is a script error for a playsound that does not have this flag set to get interrupted by another playsound with notify, or for a playsound with notify that does not have this flag set to interrupt another playsound with notify. (Single player only)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlaySoundAsMaster`,
    desc: `Play the sound alias as if coming from the entity, as a master sound`,
    example: `self PlaySoundAsMaster( "Dirt_skid", "skidsound", true );`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `aliasname`,
            desc: `The sound alias to play`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `notification string`,
            desc: `If present, the sound will notify this string on this entity when done. (Single player only)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `stoppable flag`,
            desc: `If present and true, then this sound can be interrupted by another playsound command with notification string.  It is a script error for a playsound that does not have this flag set to get interrupted by another playsound with notify, or for a playsound with notify that does not have this flag set to interrupt another playsound with notify. (Single player only)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlaySoundToPlayer`,
    desc: `Play the sound alias as if coming from the entity, so that only one player can hear it`,
    example: `self PlaySoundToPlayer( "frag_out", self );`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `aliasname`,
            desc: `The sound alias to play`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `player`,
            desc: `The player that will be able to hear the sound`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlaySoundToTeam`,
    desc: `Play the sound alias as if coming from the entity, so that only one team can hear it`,
    example: `self PlaySoundToTeam( "frag_out", "axis", self );`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `aliasname`,
            desc: `The sound alias to play`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `teamname`,
            desc: `The team that will be able to hear the sound. Must be either 'axis' or 'allies'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `ignoreplayer`,
            desc: `If present, this player will not hear the sound`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetSoundBlend`,
    desc: `Set the sound blend on a blend entity`,
    example: `blend SetSoundBlend( "Stalingrad_artillery_rumble_null", "Stalingrad_artillery_rumble", 0.4 );`,
    callOn: `<sound blend entity>`,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `sound 1`,
            desc: `The first sound`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `sound 2`,
            desc: `The second sound`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `mix`,
            desc: `The mix between the two sounds, a floating point number between 0 and 1`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SoundExists`,
    desc: `Returns true if the sound alias exists`,
    example: `if ( SoundExists( "Dirt_skid", "skidsound", true ) ) { ... }`,
    callOn: ``,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `aliasname`,
            desc: `The sound alias to play`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SoundFade`,
    desc: `Fades the sound out.`,
    example: `SoundFade( 3 );`,
    callOn: ``,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `time`,
            desc: `The time over which the sound will fade in seconds. If this option is not present then the music will stop immediately`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `StopLoopSound`,
    desc: `Stop a looping sound`,
    example: `car StopLoopSound();`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `StopSounds`,
    desc: `Stop all sounds on an entity. *WARNING*, You must have a wait between StopSounds() and delete() or the sound will not stop.`,
    example: `beatBox StopSounds();`,
    callOn: `<entity> An entity`,
    returnType: ``,
    module: `Sound`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `CanSpawnTurret`,
    desc: `Returns whether a new turret can be spawned`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Spawn`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `DoSpawn`,
    desc: `Spawns an actor from an actor spawner, if possible (the spawner won't spawn if the player is looking at the spawn point, or if spawning would cause a telefrag)`,
    example: `spawned = driver DoSpawn( name );`,
    callOn: `An actor spawner`,
    returnType: ``,
    module: `Spawn`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `targetname`,
            desc: `sets the targetname of the spawned entity`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetSpawnerArray`,
    desc: `Returns an array of all of the spawners in a level.`,
    example: `spawners = GetSpawnerArray();`,
    callOn: ``,
    returnType: ``,
    module: `Spawn`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetSpawnerTeamArray`,
    desc: `Returns an array of all of the spawners in a level`,
    example: `enemies = GetSpawnerTeamArray( "axis", "neutral" );`,
    callOn: ``,
    returnType: ``,
    module: `Spawn`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `team`,
            desc: `a team name, either 'axis', 'allies', or 'neutral'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `team`,
            desc: `any number of additional team names may be added, either 'axis', 'allies', or 'neutral'`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlaceSpawnPoint`,
    desc: `Raises the spawn point up to make sure it's not in the ground, then drops it back down into the ground.`,
    example: `spawnpoints[i] PlaceSpawnPoint();`,
    callOn: `A spawn point`,
    returnType: ``,
    module: `Spawn`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: ``,
            desc: `A spawn point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `PositionWouldTelefrag`,
    desc: `Returns true if the passed in origin would telefrag a player if another player was spawned there.`,
    example: `if ( PositionWouldTelefrag( spawnpoints[i].origin ) ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Spawn`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `position`,
            desc: `The position of the potential spawn point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetSpawnerTeam`,
    desc: `Set the team for this spawner`,
    example: `self SetSpawnerTeam( "axis" );`,
    callOn: `An ai spawner`,
    returnType: ``,
    module: `Spawn`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `team`,
            desc: `The team for this spawner. Either axis, allies or neutral`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Spawn`,
    desc: `Spawns a new entity and returns a reference to the entity`,
    example: `org = Spawn( "script_origin",self getorigin() );`,
    callOn: ``,
    returnType: ``,
    module: `Spawn`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `classname`,
            desc: `The name of the class to spawn (constant string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `origin`,
            desc: `The position where the entity is to be spawned (vector)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `flags`,
            desc: `spawn flags (integer)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `radius`,
            desc: `If the entity is a 'trigger_radius' entity then this is the radius of the trigger. Otherwise this parameter is invalid`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `height`,
            desc: `If the entity is a 'trigger_radius' entity then this is the height of the trigger. Otherwise this parameter is invalid`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SpawnStruct`,
    desc: `Allocates a structure`,
    example: `ent = SpawnStruct();`,
    callOn: ``,
    returnType: ``,
    module: `Spawn`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `SpawnTurret`,
    desc: `Spawns a new turret, eg MG42 or flak gun and returns a reference to it`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Spawn`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `classname`,
            desc: `The classname of the entity (constant string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `origin`,
            desc: `The position of the vehicle (vector)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weaponinfoname`,
            desc: `The name of the weapon info to use for this turret (string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SpawnVehicle`,
    desc: `Spawns a new vehicle and returns a reference to it`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Spawn`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `modelname`,
            desc: `The name of the model to spawn (constant string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `targetname`,
            desc: `vehicle target name (constant string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `vehicletype`,
            desc: `vehicle type (constant string)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `origin`,
            desc: `The position of the vehicle (vector)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `angles`,
            desc: `The angle to spawn the vehicle at (vector)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `StalingradSpawn`,
    desc: `Force spawns an actor from an actor spawner, reguardless of whether the spawn point is in sight or if the spawn will cause a telefrag`,
    example: `spawned = driver StalingradSpawn( name );`,
    callOn: `An actor spawner`,
    returnType: ``,
    module: `Spawn`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `targetname`,
            desc: `sets the targetname of the spawned entity`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetSubStr`,
    desc: `Returns the substring of characters &gt;= &lt;start index&gt; and &lt; &lt;end index&gt;. &lt;end index&gt; is optional.`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `String`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `string`,
            desc: `The input string`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `startIndex`,
            desc: `The start index of the substring`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `endIndex`,
            desc: `The end index of the substring`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsSubStr`,
    desc: `Returns true/false if &lt;substring&gt; is a substring of &lt;string&gt;. Case sensitive.`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `String`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `string`,
            desc: `The input string`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `substring`,
            desc: `The substring`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `StrTok`,
    desc: `Tokenizes &lt;string&gt; by the delimiters &lt;delim&gt;. Returns the array of string tokens.`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `String`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `string`,
            desc: `The input string`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `delim`,
            desc: `The delimiter`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ToLower`,
    desc: `Converts &lt;string&gt; to a lower case string which is returned.`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `String`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `string`,
            desc: `The input string to be converted`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `LogPrint`,
    desc: `Prints to the server log file.`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `System`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `string`,
            desc: `The string to write to the log file`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ResetTimeout`,
    desc: `Resets the infinite loop check timer, to prevent an incorrect infinite loop error when a lot of script must be run`,
    example: `ResetTimeout();`,
    callOn: ``,
    returnType: ``,
    module: `System`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `SetArchive`,
    desc: `deprecated function, does nothing`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `System`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `integer`,
            desc: `The integer either 1 or 0.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `UpdateGamerProfile`,
    desc: `Saves the player's gamer profile. Does nothing on PC.`,
    example: `UpdateGamerProfile();`,
    callOn: ``,
    returnType: ``,
    module: `System`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetAssignedTeam`,
    desc: `returns the player's team as assigned by matchmaking. 0 = No Team, 1 = OpFor, 2 = Allies, 3 = Spectator.`,
    example: `team = GetAssignedTeam( player );`,
    callOn: ``,
    returnType: ``,
    module: `Teams`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: `The player`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetTeamPlayersAlive`,
    desc: `Returns the number of players still alive on a given team`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Teams`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `team`,
            desc: `A string value, either 'axis' or 'allies'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetTeamRadar`,
    desc: `Gets whether a team has radar or not`,
    example: `GetTeamRadar( "allies" )`,
    callOn: ``,
    returnType: ``,
    module: `Teams`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `team`,
            desc: `The name of a team. Must be either Must be 'axis', 'allies' or 'none'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetTeamScore`,
    desc: `Get a team's score`,
    example: `if ( GetTeamScore( "allies" ) &gt; getTeamScore("axis") ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Teams`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `team`,
            desc: `The name of a team. Must be either 'axis' or 'allies'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTeamRadar`,
    desc: `Sets whether a team has radar or not`,
    example: `SetTeamRadar( "allies", true )`,
    callOn: ``,
    returnType: ``,
    module: `Teams`,
    supportedAt: ``,
    games: ['CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `team`,
            desc: `The name of a team. Must be either Must be 'axis', 'allies' or 'none'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `availability`,
            desc: `Whether the team has radar; defaults to false`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTeamScore`,
    desc: `Set a team's score`,
    example: `SetTeamScore( "allies", 100 )`,
    callOn: ``,
    returnType: ``,
    module: `Teams`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `team`,
            desc: `The name of a team. Must be either 'axis' or 'allies'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `score`,
            desc: `The new team score`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `BulletTrace`,
    desc: `Allows script to do a point trace with MASK_SHOT. Returns hit position, hit entity, hit surface normal.`,
    example: `trace = BulletTrace( magicBulletOrigin.origin, eyePos, true, undefined );`,
    callOn: ``,
    returnType: ``,
    module: `Trace`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `start`,
            desc: `The bullet start point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `end`,
            desc: `The bullet end point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `hit characters`,
            desc: `When set to true, this will trace for character hits`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `ignore entity`,
            desc: `An entity to ignore`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `BulletTracePassed`,
    desc: `Allows script to do a point trace with MASK_SHOT. Returns true if trace complete, else returns false.`,
    example: `success = BulletTracePassed( magicBulletOrigin.origin, eyePos, true, undefined);`,
    callOn: ``,
    returnType: ``,
    module: `Trace`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `start`,
            desc: `The bullet start point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `end`,
            desc: `The bullet end point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `hit characters`,
            desc: `When set to true, this will trace for character hits`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `ignore entity`,
            desc: `An entity to ignore`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PhysicsTrace`,
    desc: `Physics trace, ignoring characters. Returns the endpos vector.`,
    example: `endpos = PhysicsTrace( start, end );`,
    callOn: ``,
    returnType: ``,
    module: `Trace`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `start`,
            desc: `The start point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `end`,
            desc: `The end point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `PlayerPhysicsTrace`,
    desc: `Physics trace using player capsule size, ignoring characters. Returns the endpos vector.`,
    example: `endpos = PlayerPhysicsTrace( start, end );`,
    callOn: ``,
    returnType: ``,
    module: `Trace`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `start`,
            desc: `The start point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `end`,
            desc: `The end point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SightConeTrace`,
    desc: `Determines how much the entity can be seen from the given position, using the same check that is used by grenades. Performs multiple sight traces and returns an approximation to how much of the entity is visible from the given point (between 0 and 1). In SinglePlayer this will always be 1 if the entity is partially visible.`,
    example: `visibilityAmount = player SightConeTrace( eye.origin, eye );`,
    callOn: `<entity> The entity to do the sight check against`,
    returnType: ``,
    module: `Trace`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `The entity to do the sight check against`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `sight position`,
            desc: `The point the sight starts at`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `ignore entity`,
            desc: `An entity to ignore when doing the traces`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SightTracePassed`,
    desc: `Allows script to do a point trace with MASK_OPAQUE_AI. Returns true if trace complete, else returns false.`,
    example: `success = SightTracePassed( magicBulletOrigin.origin, eyePos, true, undefined );`,
    callOn: ``,
    returnType: ``,
    module: `Trace`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `start`,
            desc: `The sight start point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `end`,
            desc: `The sight end point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `hit characters`,
            desc: `When set to true, this will trace for character hits`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `ignore entity`,
            desc: `An entity to ignore`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ClientClaimTrigger`,
    desc: `Claim a single user trigger.`,
    example: `other ClientClaimTrigger( self );`,
    callOn: `A Client`,
    returnType: ``,
    module: `Triggers`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `trigger`,
            desc: `A trigger entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ClientReleaseTrigger`,
    desc: `Release a single user trigger.`,
    example: `other ClientReleaseTrigger( self );`,
    callOn: `A Client`,
    returnType: ``,
    module: `Triggers`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `trigger`,
            desc: `A trigger entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ReleaseClaimedTrigger`,
    desc: `Release a currently claimed trigger`,
    example: ``,
    callOn: `A Trigger`,
    returnType: ``,
    module: `Triggers`,
    supportedAt: ``,
    games: ['CoD2 MP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: ``,
            desc: `A Trigger`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `ClearTargetEntity`,
    desc: `Clears the current target for this turret.`,
    example: `roof_mg42 ClearTargetEntity();`,
    callOn: `<turret> A turret entity`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `A turret entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetTurretOwner`,
    desc: `Gets the "owner" of this turret`,
    example: `mg42user = roof_mg42 GetTurretOwner();`,
    callOn: `<turret> A turret entity`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `A turret entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetTurretTarget`,
    desc: `Gets the current target of this turret`,
    example: `target = roof_mg42 GetTurretTarget();`,
    callOn: `<turret> A turret entity`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `A turret entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsFiringTurret`,
    desc: `Checks whether this turret is firing. The entity must be a turret`,
    example: `mg42 IsFiringTurret();`,
    callOn: `a Turret`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `The turret entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `MakeTurretUnusable`,
    desc: `Sets a turret to be unable to be used`,
    example: `roof_mg42 MakeTurretUnusable();`,
    callOn: `<turret> A turret entity`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `A turret entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `MakeTurretUsable`,
    desc: `Sets a turret able to be used`,
    example: `roof_mg42 MakeTurretUsable();`,
    callOn: `<turret> A turret entity`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `A turret entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `RestoreDefaultDropPitch`,
    desc: `Restores the pitch of the turret when it drops to the ground.`,
    example: `turret RestoreDefaultDropPitch();`,
    callOn: `<turret> the turret which you wish to set the drop pitch on.`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `the turret which you wish to set the drop pitch on.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetAISpread`,
    desc: `Sets the spread of this turret when used by an AI`,
    example: `roof_mg42 SetAISpread( 0.2 );`,
    callOn: `<turret> A turret entity`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `A turret entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `spread`,
            desc: `The spread of the turret in degrees`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetBottomArc`,
    desc: `Set the amount that the turret can pivot down`,
    example: `mg42 SetBottomArc( 45 );`,
    callOn: `A turret`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `angle`,
            desc: `The bottom arc in degrees`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetConvergenceTime`,
    desc: `Sets the time that a turret takes to converge to its target, on either the pitch or yay planes.`,
    example: `roof_mg42 SetConvergenceTime( 2.0, "yaw" );`,
    callOn: `<turret> A turret entity`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `A turret entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `convergence time`,
            desc: `The time that the turret takes to converge in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `type`,
            desc: `the type of convergence. Can be either 'pitch' or 'yaw'. If not set then the default is 'yaw'`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetDefaultDropPitch`,
    desc: `Set the default drop pitch that the turret attempts to return to when it is not in use.`,
    example: `turret SetDefaultDropPitch( -90 );`,
    callOn: `<turret> the turret which you wish to set the drop pitch on.`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `the turret which you wish to set the drop pitch on.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `pitch`,
            desc: `yaw of the turret (side to side) in degrees`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetLeftArc`,
    desc: `Set the amount that the turret can move to the left`,
    example: `mg42 SetLeftArc( 45 );`,
    callOn: `A turret`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `angle`,
            desc: `The left arc in degrees`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetMode`,
    desc: `Set the mode of a turret.`,
    example: `mg42 SetMode( "auto_ai" );`,
    callOn: `<turret> A turret entity`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `A turret entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `mode`,
            desc: `The turret mode. Possible modes are "auto_ai", "manual", "manual_ai" and "auto_nonai`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetPlayerSpread`,
    desc: `Sets the spread of this turret when used by the player`,
    example: `roof_mg42 SetPlayerSpread( 0.2 );`,
    callOn: `<turret> A turret entity`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `A turret entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `spread`,
            desc: `The spread of the turret in degrees`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetRightArc`,
    desc: `Set the amount that the turret can move to the right`,
    example: `mg42 SetRightArc( 4 5);`,
    callOn: `A turret`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `angle`,
            desc: `The right arc in degrees`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetSuppressionTime`,
    desc: `Sets the time that a turret uses supressing fire after losing sight of an enemy`,
    example: `roof_mg42 SetSuppressionTime( 1.0 );`,
    callOn: `<turret> A turret entity`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `A turret entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `supression time`,
            desc: `The time that the turret will supress an unseen enemy in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTargetEntity`,
    desc: `Sets the target of this turret`,
    example: `roof_mg42 SetTargetEntity( target );`,
    callOn: `<turret> A turret entity`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `A turret entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `target`,
            desc: `the turret target`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTopArc`,
    desc: `Set the amount that the turret can pivot up`,
    example: `mg42 SetTopArc( 45 );`,
    callOn: `A turret`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `angle`,
            desc: `The top arc in degrees`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTurretIgnoreGoals`,
    desc: `Sets the ignoreGoals flag for the turret.`,
    example: `roof_mg42 SetTurretIgnoreGoals( true );`,
    callOn: `<turret> A turret entity`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `A turret entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `ignoreGoals`,
            desc: `If this is true then any actor on this turret will ignore his goals, and continue to use the turret. This is useful for vehicle based turrets`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTurretTeam`,
    desc: `Sets the team of a turret`,
    example: `roof_mg42 SetTurretTeam( "axis" );`,
    callOn: `<turret> A turret entity`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `A turret entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `team`,
            desc: `The turret's "team" (string) either "axis" or "allies"`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ShootTurret`,
    desc: `Shoots a turret`,
    example: `roof_mg42 ShootTurret();`,
    callOn: `<turret> A turret entity`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `A turret entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `StartFiring`,
    desc: `Starts a turret firing`,
    example: `mg42 StartFiring();`,
    callOn: `<turret> A turret entity`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `A turret entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `StopFiring`,
    desc: `Stops a turret firing`,
    example: `mg42 StopFiring();`,
    callOn: `<turret> A turret entity`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `A turret entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `TurretFireDisable`,
    desc: `Disable the turret's ability to fire.`,
    example: `chaingun TurretFireDisable();`,
    callOn: `<turret> A turret entity`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `A turret entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `TurretFireEnable`,
    desc: `Enable the turret's ability to fire.`,
    example: `chaingun TurretFireDisable();`,
    callOn: `<turret> A turret entity`,
    returnType: ``,
    module: `Turret`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `turret`,
            desc: `A turret entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsArray`,
    desc: `Checks whether this entity/variable is an array`,
    example: `if ( IsArray( gun_owner ) ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Variables`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `variable`,
            desc: `variable that may or may not be a array`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsDefined`,
    desc: `Checks whether this entity/variable is defined`,
    example: `if ( IsDefined( gun_owner ) ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Variables`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `object`,
            desc: `object that may or may not be defined`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsString`,
    desc: `Checks whether this entity/variable is a string`,
    example: `if ( IsString( gun_owner ) ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Variables`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `variable`,
            desc: `variable that may or may not be a string`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AnglesToForward`,
    desc: `Returns the forward vector corresponding to a set of angles.`,
    example: `forward = AnglesToForward( forward );`,
    callOn: ``,
    returnType: ``,
    module: `Vector`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `angles`,
            desc: `A set of angles`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AnglesToRight`,
    desc: `Returns the right vector corresponding to a set of angles.`,
    example: `right = AnglesToRight( angles );`,
    callOn: ``,
    returnType: ``,
    module: `Vector`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `angles`,
            desc: `A set of angles`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AnglesToUp`,
    desc: `Returns the up vector corresponding to a set of angles.`,
    example: `up = AnglesToUp( angles );`,
    callOn: ``,
    returnType: ``,
    module: `Vector`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `angles`,
            desc: `A set of angles`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Closer`,
    desc: `Tests which of two points is the closest. Returns true if point a is closer to the reference than point b`,
    example: `if( Closer( center, models[j].origin , models[i].origin ) ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Vector`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `reference`,
            desc: `The base position`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `point a`,
            desc: `The first point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `point b`,
            desc: `The second point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `CombineAngles`,
    desc: `Returns angles b reoriented by angles a.`,
    example: `crateAnglesInWorld = CombineAngles( boatAngles, crateAnglesInBoat );`,
    callOn: ``,
    returnType: ``,
    module: `Vector`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `angles a`,
            desc: `Angles representing the orientation in which to place <angles b>`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `angles b`,
            desc: `Angles which will be reoriented`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Distance`,
    desc: `Returns the distance between two points`,
    example: `dist = Distance( org, ai[i].origin );`,
    callOn: ``,
    returnType: ``,
    module: `Vector`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `point1`,
            desc: `The first point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `point2`,
            desc: `The second point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Distance2D`,
    desc: `Returns the distance between two points, ignores height difference.`,
    example: `dist = Distance2D( org, ai[i].origin );`,
    callOn: ``,
    returnType: ``,
    module: `Vector`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `point1`,
            desc: `The first point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `point2`,
            desc: `The second point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `DistanceSquared`,
    desc: `Returns the squared distance between two points - this is cheaper than the actual distance as it doesn't involve a square root`,
    example: `dist2 = DistanceSquared( models[j].origin, center );`,
    callOn: ``,
    returnType: ``,
    module: `Vector`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `point1`,
            desc: `The first point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `point2`,
            desc: `The second point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Length`,
    desc: `Returns the length of the given vector`,
    example: `dist = Length( models[j].origin - center );`,
    callOn: ``,
    returnType: ``,
    module: `Vector`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `vector`,
            desc: `A vector`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `LengthSquared`,
    desc: `Returns the squared vector length for the given vector - this is cheaper than the actual vector length as it doesn't involve a square root`,
    example: `dist2 = LengthSquared( models[j].origin - center );`,
    callOn: ``,
    returnType: ``,
    module: `Vector`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `vector`,
            desc: `A vector`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `VectorDot`,
    desc: `Returns the dot product of two vectors`,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Vector`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `vector a`,
            desc: `The first vector`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `vector b`,
            desc: `The second vector`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `VectorLerp`,
    desc: `Linear interpolates between two vectors.`,
    example: `color = VectorLerp( oldColor, newColor, timeElapsed / timeTotal );`,
    callOn: ``,
    returnType: ``,
    module: `Vector`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `from`,
            desc: `The vector whose value is used when fraction is 0`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `to`,
            desc: `The vector whose value is used when fraction is 1`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `fraction`,
            desc: `The fraction of the way between vectors.  Values less than 0 or greater than 1 do linear extrapolation`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `VectorNormalize`,
    desc: `Returns a normalized copy of this vector`,
    example: `difference = VectorNormalize( end - start );`,
    callOn: ``,
    returnType: ``,
    module: `Vector`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `vector`,
            desc: `The vector to normalize`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `VectorToAngles`,
    desc: `Returns a set of angles corresponding to the given vector.`,
    example: `angles = VectorToAngles( end - start );`,
    callOn: ``,
    returnType: ``,
    module: `Vector`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `vector`,
            desc: `The vector to convert to angles`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AddVehicleToCompass`,
    desc: `Add this vehicle to the compass.`,
    example: `self AddVehicleToCompass();`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `compassIconType`,
            desc: `Type of icon to show on the minimap, can be 'tank', 'helicopter', 'plane', 'automobile'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `AttachPath`,
    desc: `Attaches this vehicle to the given path.`,
    example: `bomber AttachPath( aBomberPaths[i] );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `node index`,
            desc: `A node on the path to attach`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ClearGoalYaw`,
    desc: `Clear the goal yaw direction for this vehicle.`,
    example: `level.flak1 ClearGoalYaw();`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `ClearLookAtEnt`,
    desc: `Clear the entity the vehicle is orienting towards.`,
    example: `eTank ClearLookAtEnt();`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `ClearTargetYaw`,
    desc: `Clear the target yaw direction for this vehicle.`,
    example: `level.flak1 ClearTargetYaw();`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `ClearTurretTarget`,
    desc: `Clear the target for the vehicle turret.`,
    example: `eTank ClearTurretTarget();`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `vehicle`,
            desc: `The vehicle entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `FireWeapon`,
    desc: `Fire the vehicle's weapon`,
    example: `nFlak FireWeapon();`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `barrel tag`,
            desc: `The tag name of the barrel to fire from.  Passing in nothing or an empty string will default to use the vehicle's main turret`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `target ent`,
            desc: `A target entity for guided missiles`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `target offset`,
            desc: ``,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `FreeVehicle`,
    desc: `Frees this vehicle instance.`,
    example: `self FreeVehicle();`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `vehicle`,
            desc: `The vehicle entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetAttachPos`,
    desc: `Returns the origin and angles if the vehicle were to be attached to the path. The origin and angles are returned as a vector array of size 2. Origin is 1st and angles is 2nd.`,
    example: `pos = self GetAttachPos( node ); origin = pos[0]; angles = pos[1];`,
    callOn: `A vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `node index`,
            desc: `A node on the path to attach`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetEngineVolume`,
    desc: `Gets the volume of engine sound for this vehicle (the scaling value set by SetEngineVolume. The volume of the soundalias itself may be less than 1.0)`,
    example: `scale = helicopter GetEngineVolume();`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetGoalSpeedMPH`,
    desc: `Gets the goal speed in miles per hour.`,
    example: `self GetGoalSpeedMPH();`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `GetSpeed`,
    desc: `Gets the current speed in inches per second.`,
    example: `self GetSpeed();`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `vehicle`,
            desc: `The vehicle entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetVehicleOwner`,
    desc: `Returns the owner of this particular vehicle.`,
    example: `eFlak88user = eFlak88 GetVehicleOwner();`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `vehicle`,
            desc: `The vehicle entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetWheelSurface`,
    desc: `Returns the surface type of the given wheel as a string.`,
    example: `surface = self GetWheelSurface( side );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `wheel`,
            desc: `The wheel position, can be 'front_left', 'front_right', 'back_left', 'back_right', 'middle_left', 'middle_right'`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsTurretReady`,
    desc: `Query whether this vehicle's turret is ready for firing`,
    example: `while ( level.playertank IsTurretReady() != true ) ...`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `vehicle`,
            desc: `The vehicle entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `JoltBody`,
    desc: `Jolts the vehicle.`,
    example: `self JoltBody( (self.origin + (0,0,64)), 0.5 );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `jolt position`,
            desc: `The position of the jolt`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `intensity`,
            desc: `The intensity of the jolt`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `speedFrac`,
            desc: `A speed fraction to apply to the jolt. Most be betweeon 0 and 1`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `deceleration`,
            desc: `The deceleration to apply to this vehicle in miles per hour per second`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `MakeVehicleUnusable`,
    desc: `Sets this vehicle to be not usable by the player`,
    example: `car MakeVehicleUnusable();`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `vehicle`,
            desc: `The vehicle entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `MakeVehicleUsable`,
    desc: `Sets this vehicle to be usable by the player`,
    example: `nFlak MakeVehicleUsable();`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `vehicle`,
            desc: `The vehicle entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `MakeVehicleUsable`,
    desc: `Sets this vehicle to be usable by the player`,
    example: `nFlak MakeVehicleUsable();`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `vehicle`,
            desc: `The vehicle entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `ResumeSpeed`,
    desc: `Sets the vehicle to resume its path speed.`,
    example: `level.tank ResumeSpeed( 3 );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `acceleration`,
            desc: `The acceleration to apply to this vehicle in miles per hour per second`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ReturnPlayerControl`,
    desc: `After controlling a vehicle from script using something like setvehgoalpos(), if the vehicle is being driven by a player, you call this function to return control of the vehicle to the player.`,
    example: `cobra ReturnPlayerControl();`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `SetAcceleration`,
    desc: `Sets the acceleration for this vehicle.`,
    example: `self SetAcceleration( 15 );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `acceleration`,
            desc: `The acceleration of the vehicle in miles per hour per second`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetAirResistance`,
    desc: `Sets the speed at which air resistance maxes out.`,
    example: `self SetAirResistance( 60 );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `max air resistance speed`,
            desc: `speed at which air resistance maxes out (MPH)`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetDeceleration`,
    desc: `Sets the deceleration for this vehicle.`,
    example: `self SetDeceleration( 5 );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `deceleration`,
            desc: `The deceleration of the vehicle in miles per hour per second`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetEngineVolume`,
    desc: `Scales the volume of engine sound for this vehicle. This is useful for ramping up sounds of newly spawned vehicles.`,
    example: `helicopter SetEngineVolume( 0.5 );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `scale`,
            desc: `Scales thet total volume of the vehicle`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetGoalYaw`,
    desc: `Set the goal yaw direction for this vehicle. Goal yaw is ignored if vehicle doesn't stop at goal. Lookat entity has priority over goal yaw`,
    example: `level.flak1 SetGoalYaw( vec1 );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `yaw`,
            desc: `The yaw direction of the target`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetHoverParams`,
    desc: `Set the hovering parameters.`,
    example: `self SetHoverParams( 50, 1, 0.5 );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `radius`,
            desc: `The hovering range`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `speed`,
            desc: `Speed to hover at (MPH)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `accel`,
            desc: `Acceleration to hover at (MPH/s)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetJitterParams`,
    desc: `Set the jitter parameters. Set everything to 0 to stop jittering. Vehicle ignores jitter parameters when on ground`,
    example: `self SetJitterParams( (0,0,20), 0.5, 1.5 ); // Jitter up or down randomly within 20 units, switching every 0.5 to 1.5 seconds`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `range vector`,
            desc: `The jitter range vector`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `min period`,
            desc: `Minimum time in seconds to switch jitter direction. Default 0.5 sec`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `max period`,
            desc: `Maximum time in seconds to switch jitter direction. Default 1.0 sec`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetLookAtEnt`,
    desc: `Set the entity this vehicle will orient towards.`,
    example: `eFlak88 SetLookAtEnt( eFlaktarget );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `The target`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetMaxPitchRoll`,
    desc: `Sets max pitch and roll angle for this vehicle.`,
    example: `self SetMaxPitchRoll( 30, 30 );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `pitch`,
            desc: `Max pitch angle`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `roll`,
            desc: `Max roll angle`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetNearGoalNotifyDist`,
    desc: `Set distance near goal at which near_goal notification should be sent once.`,
    example: `tank SetNearGoalNotifyDist( 50 )`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `dist`,
            desc: `Distance to goal position`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetSpeed`,
    desc: `Sets the speed and acceleration for this vehicle.`,
    example: `self SetSpeed( 60, 15, 5 );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `speed`,
            desc: `The speed of the vehicle in miles per hour`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `acceleration`,
            desc: `The acceleration of the vehicle in miles per hour per second`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `deceleration`,
            desc: `Deceleration. If not specified, set to be equal to half of accleration`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetSpeedImmediate`,
    desc: `Sets the speed and acceleration for this vehicle instantaneously. Direction will be toward the goal direction if there is a goal, otherwise the current direction.`,
    example: `self SetSpeedImmediate(60, 15, 5);`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `speed`,
            desc: `The speed of the vehicle in miles per hour`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `acceleration`,
            desc: `The acceleration of the vehicle in miles per hour per second`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `deceleration`,
            desc: `Deceleration. If not specified, set to be equal to half of accleration`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetSwitchNode`,
    desc: `Sets a switch node for this vehicle.`,
    example: `tank2 SetSwitchNode( tank2snode1, tank2snode2 );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `source node`,
            desc: `The switch source node`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `dest node`,
            desc: `The switch destination node`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTargetYaw`,
    desc: `Set the target yaw direction for this vehicle. Goal yaw has priority over target yaw.`,
    example: `level.flak1 SetTargetYaw( vec1 );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `yaw`,
            desc: `The yaw direction of the target`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTurningAbility`,
    desc: `If this is higher, helicopters can make sharper turns to match goal positions better.`,
    example: `self SetTurningAbility( 0.9 );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `turning ability`,
            desc: `Between 0.001 and 1.0. Defaults to 0.5`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTurretTargetEnt`,
    desc: `Set the target entity for this vehicle turret.`,
    example: `eFlak88 SetTurretTargetEnt( eFlaktarget, eFlaktarget.origin );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `target entity`,
            desc: `The target`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `target offset`,
            desc: `The target offset`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetTurretTargetVec`,
    desc: `Set the target position for this vehicle turret.`,
    example: `level.flak1 SetTurretTargetVec( vec1 );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `target position`,
            desc: `The position of the target`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetVehGoalPos`,
    desc: `Set the target position for this vehicle.`,
    example: `tank SetVehGoalPos( (0, 0, 0), 1 )`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `goal position`,
            desc: `The goal position`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `stop at goal`,
            desc: `Whether the vehicle should slow down to stop at the goal position`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetVehicleLookAtText`,
    desc: `Set look at text for vehicle.`,
    example: ``,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `lookat text line 1`,
            desc: `The unlocalized look at text for this vehicle. Line is green and usually a name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `lookat text line 2`,
            desc: `The localized look at text for this vehicle. Line is white and usually a type`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetVehicleTeam`,
    desc: `Set which team a vehicle is on.`,
    example: ``,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `team`,
            desc: `The team name. Must be either "allies", "axis", or "none"`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetVehWeapon`,
    desc: `Set the vehicle's weapon`,
    example: `chopper SetVehWeapon( "AGM_114" );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetWaitNode`,
    desc: `Sets a wait node for this vehicle.`,
    example: `self SetWaitNode( pathspot );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `wait node`,
            desc: `The node for the vehicle to wait at`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetWaitSpeed`,
    desc: `Sets a the wait speed for for this vehicle in miles per hour.`,
    example: `self SetWaitSpeed( 5 );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `wait speed`,
            desc: `The wait speed for the vehicle`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `SetYawSpeed`,
    desc: `Sets the yaw speed for this vehicle.`,
    example: `self SetYawSpeed( 120, 60 );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `speed`,
            desc: `The speed of the vehicle in angles per second`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `acceleration`,
            desc: `The acceleration of the vehicle in angles per second^2`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `deceleration`,
            desc: `Deceleration. If not specified, set to be equal to acceleration`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `overshoot percent`,
            desc: `How much to over shoot goal yaw by. Default 0.1`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `StartEngineSound`,
    desc: `Start the engine sound for this vehicle.`,
    example: `truck StartEngineSound();`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `vehicle`,
            desc: `The vehicle entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `StartPath`,
    desc: `Starts the vehicle following this path.`,
    example: `bomber StartPath( aBomberPaths[i] );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `node index`,
            desc: `A node on the path to attach`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `StopEngineSound`,
    desc: `Start the engine sound for this vehicle.`,
    example: `truck StopEngineSound();`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `vehicle`,
            desc: `The vehicle entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `VehForceMaterialSpeed`,
    desc: `Force treads to scroll as if the vehicle was moving at the given speed.`,
    example: `VehForceMaterialSpeed( true, 1000 ); VehForceMaterialSpeed( false );`,
    callOn: `a vehicle`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `BulletSpread`,
    desc: `uses spread to return a new end position`,
    example: `endpos = BulletSpread( self.origin, target.origin, 1.0 )`,
    callOn: ``,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `start`,
            desc: `The bullet starting point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `end`,
            desc: `The bullet ending point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `spread`,
            desc: `Amount of spread`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `BulletTracer`,
    desc: `creates a bullet tracer from the start to end point`,
    example: `BulletTracer( self.origin, target.origin )`,
    callOn: ``,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `start`,
            desc: `The starting point bullet tracer`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `end`,
            desc: `The end point bullet tracer`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `force draw`,
            desc: `Set to true to ignore 'cg_tracerChance' setting and always draw the tracer`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `DisableGrenadeTouchDamage`,
    desc: `Disable grenade damage for damage triggers`,
    example: `self DisableGrenadeTouchDamage();`,
    callOn: `A damage trigger entity`,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `A damage trigger entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `EnableGrenadeTouchDamage`,
    desc: `enable grenade damage for damage triggers`,
    example: `self EnableGrenadeTouchDamage();`,
    callOn: `A damage trigger entity`,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `entity`,
            desc: `A damage trigger entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetAmmoCount`,
    desc: `Get the remaining ammo`,
    example: `GetAmmoCount( "mosin_nagant_sniper" );`,
    callOn: `<player>`,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `player`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `weapon name`,
            desc: `The weapon name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetWeaponClipModel`,
    desc: `Returns the name of the weapon clip/magazine model used for the given weapon`,
    example: `sniper_model = GetWeaponClipModel( "m16_basic" );`,
    callOn: ``,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The name of the weapon`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `GetWeaponModel`,
    desc: `Returns the name of the weapon model used for the given weapon.`,
    example: `sniper_model = GetWeaponModel("mosin_nagant_sniper", 0);`,
    callOn: ``,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP', 'CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The name of the weapon`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `model variant`,
            desc: `Model variant (0-15)`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsWeaponClipOnly`,
    desc: `Returns true if the weapon is clip only`,
    example: `IsWeaponClipOnly( "c4" );`,
    callOn: ``,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `: (string) The weapon name for this weapon`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `IsWeaponDetonationTimed`,
    desc: `Returns true if the weapon has timed detonation (e.g. frag/smoke grenades)`,
    example: `IsWeaponDetonationTimed( "c4" );`,
    callOn: ``,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `: (string) The weapon name for this weapon`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `ItemWeaponSetAmmo`,
    desc: `Sets the ammo ammount for a weapon item entity (lying on the ground)`,
    example: `weapon ItemWeaponSetAmmo( 5, 20 );`,
    callOn: `A weapon item entity`,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `clip ammo`,
            desc: `The amount of ammo in the clip`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `reserve ammo`,
            desc: `The amount of ammo not in the clip`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `alt weapon`,
            desc: `Pass zero to set ammo for the primary weapon.  Pass 1 to set ammo for the alt weapon.  The default is 0`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `MagicBullet`,
    desc: `Fire a 'magic bullet', from the source location towards the destination point.`,
    example: `MagicBullet( "mosin_nagant_sniper", self.origin, target.origin )`,
    callOn: ``,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `weaponName`,
            desc: `The name of the weapon`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `start`,
            desc: `The bullet tracer starting point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `end`,
            desc: `The end point`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `MagicGrenade`,
    desc: `Creates a "Magic" grenade from an actor.`,
    example: `self MagicGrenade( self.origin, target.origin, 2.0 );`,
    callOn: `an Actor`,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `origin`,
            desc: `The starting point of the grenade toss`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `target position`,
            desc: `The target point of the grenade toss`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time to blow`,
            desc: `The grenade fuse time in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `MagicGrenadeManual`,
    desc: `creates a "Magic" grenade from an actor`,
    example: `self MagicGrenadeManual( self.origin, target.origin, 2.0 )`,
    callOn: `an Actor`,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `origin`,
            desc: `The starting point of the grenade toss`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `velocity`,
            desc: `The initial velocity vector for the grenade movement`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time to blow`,
            desc: `The grenade fuse time in seconds`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `Missile_SetTarget`,
    desc: `Sets the target entity for a guided missile`,
    example: `missile Missile_SetTarget( otherEnt );`,
    callOn: `A missile`,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `target entity`,
            desc: `The entity toward which the missile will steer`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `target offset`,
            desc: `A vector, giving the offset from the entity's origin toward which the missile will steer`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `WeaponAltWeaponName`,
    desc: `Returns the name of the weapon this weapon has for its alternate mode. Returns "none" if there is no alt fire. Subsequent alternate weapons can be retrieved by calling the function again with the new weapon names until it returns the original weapon.`,
    example: `grenadeLauncherAttachment = WeaponAltWeaponName( "m16_gl_mp" )`,
    callOn: ``,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `WeaponClass`,
    desc: `Returns the class of weapon that this weapon is, such as "rifle", "smg", "spread", "pistol", etc.`,
    example: `if ( WeaponClass( "m16_basic" ) == "rifle" ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `WeaponClipSize`,
    desc: `Get the weapon clip size for the given weapon`,
    example: `WeaponClipSize( "mosin_nagant_sniper" );`,
    callOn: ``,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `WeaponFightDist`,
    desc: `Returns the fight distance for this weapon`,
    example: `fightdist = WeaponFightDist( "mosin_nagant_sniper" );`,
    callOn: ``,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `WeaponFireTime`,
    desc: `Get the weapon fire time for the given weapon`,
    example: `WeaponFireTime( "mosin_nagant_sniper" );`,
    callOn: ``,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `WeaponInventoryType`,
    desc: `Returns the way this weapon is stored, such as "altmode", "item", "offhand", or "primary".`,
    example: `if ( WeaponInventoryType( "rpg_mp" ) == "item" ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `WeaponIsBoltAction`,
    desc: `Get whether this weapon has a bolt action`,
    example: `WeaponIsBoltAction( "m14_scoped" );`,
    callOn: ``,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `WeaponIsSemiAuto`,
    desc: `Get whether this weapon is semi automatic`,
    example: `WeaponIsSemiAuto( "m14_scoped" );`,
    callOn: ``,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `WeaponMaxAmmo`,
    desc: `Returns the max amount of ammo this weapon is meant to hold. Stockpile only, not the clip.`,
    example: `max = WeaponMaxAmmo( "mp5" )`,
    callOn: ``,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `WeaponMaxDist`,
    desc: `Returns the maximum distance for this weapon`,
    example: `maxdist = WeaponMaxDist( "m16_grenadier" );`,
    callOn: ``,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `WeaponStartAmmo`,
    desc: `Returns the amount of ammo this weapon is meant to start with when first given to a player.`,
    example: `numrounds = WeaponStartAmmo( "mp5" )`,
    callOn: ``,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `WeaponType`,
    desc: `Returns the type of weapon that this weapon is, such as "bullet", "projectile", "grenade", or "binoculars".`,
    example: `if ( WeaponType( "mosin_nagant_sniper" ) == "bullet" ) ...`,
    callOn: ``,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD4 SP', 'CoD4 MP', 'CoD MWR'],
    parameters: [
        {
            name: `weapon name`,
            desc: `The weapon name`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

// COD2 functions
defs.push(new CodFunction({
    name: `enterProne`,
    desc: `Set the actor to enter the prone position.`,
    example: `self EnterProne(1.0);`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `interpolationTime`,
            desc: `Time to go prone in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `predictAnim`,
    desc: `Enable or disable animation prediction`,
    example: `bPredictMore = self PredictAnim(true);`,
    callOn: `An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP'],
    parameters: [
        {
            name: ``,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `enable`,
            desc: `Enable or disable.`,
            type: `bool`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `setGoalEntity`,
    desc: `Set this actor's goal entity.`,
    example: `spawned SetGoalEntity( level.player );`,
    callOn: `<actor> An actor`,
    returnType: ``,
    module: `AI`,
    supportedAt: ``,
    games: ['CoD2 SP'],
    parameters: [
        {
            name: `actor`,
            desc: `An actor`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `goalEntity`,
            desc: `The goal entity.`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `setAnimKnob`,
    desc: `SetAnim and all of its variants set the weight of an animation (or a node in the animtree) to a given value over a given time. They also set the speed at which the animation plays. All of the ancestors of the animation will also have their weight set to 1 over the given time so that the animation is visible. Each variant of this function has different behavior depending on the words in the function "name":\n"Knob": These functions turn the weight of any siblings of the animation to zero as the animation's weight is turned up. The effect is that after the given time, the animation is the only one out of its siblings that is playing. Note that the descendents of the siblings of the animation will not be turned off directly. (For this, use ClearAnim.)`,
    example: `self SetAnimKnob( %precombatrun1, 1, 0.1, 1 );`,
    callOn: `<entity> (entity) An entity`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0.`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2.`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0.`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `setFlaggedAnimKnobAll`,
    desc: `SetAnim and all of its variants set the weight of an animation (or a node in the animtree) to a given value over a given time. They also set the speed at which the animation plays. All of the ancestors of the animation will also have their weight set to 1 over the given time so that the animation is visible. Each variant of this function has different behavior depending on the words in the function "name":\n"Flagged": These functions take an additional argument <notifyname> (first in the argument list) which is a string that is notified for every notetrack in the animation. For instance, if the string "runanim" is used, it would be typical to waittill("runanim", "end") to wait for the end of the animation. <animation> must be an actual animation and not a non-leaf node of the animtree.\n"Knob": These functions turn the weight of any siblings of the animation to zero as the animation's weight is turned up. The effect is that after the given time, the animation is the only one out of its siblings that is playing. Note that the descendents of the siblings of the animation will not be turned off directly. (For this, use ClearAnim.)\n"All": Works only with "Knob." Not available with both "Limited" and "Flagged" at the same time. These functions take an additional argument <root> (after the animation argument). <root> must be an ancestor of <animation> in the tree. This has the additional effect that "Knob" has on all nodes from the animation up to (but not including) <root>, so that this animation is the only one in its area of the tree which is playing.`,
    example: `self SetFlaggedAnimKnobAll( "runanim", %precombatrun1, %body, 1, 0.1, 1 );`,
    callOn: `<entity> (entity) An entity`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `notifyname`,
            desc: `The string to notify notetracks with.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `root`,
            desc: `An ancestor of the animation.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0.`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2.`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0.`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `setFlaggedAnimKnobAllRestart`,
    desc: `SetAnim and all of its variants set the weight of an animation (or a node in the animtree) to a given value over a given time. They also set the speed at which the animation plays. All of the ancestors of the animation will also have their weight set to 1 over the given time so that the animation is visible. Each variant of this function has different behavior depending on the words in the function "name":\n"Flagged": These functions take an additional argument <notifyname> (first in the argument list) which is a string that is notified for every notetrack in the animation. For instance, if the string "runanim" is used, it would be typical to waittill("runanim", "end") to wait for the end of the animation. <animation> must be an actual animation and not a non-leaf node of the animtree.\n"Knob": These functions turn the weight of any siblings of the animation to zero as the animation's weight is turned up. The effect is that after the given time, the animation is the only one out of its siblings that is playing. Note that the descendents of the siblings of the animation will not be turned off directly. (For this, use ClearAnim.)\n"All": Works only with "Knob." Not available with both "Limited" and "Flagged" at the same time. These functions take an additional argument <root> (after the animation argument). <root> must be an ancestor of <animation> in the tree. This has the additional effect that "Knob" has on all nodes from the animation up to (but not including) <root>, so that this animation is the only one in its area of the tree which is playing.\n"Restart": These functions cause the animation to restart. If they had been previously playing, without this they would continue from their current time.`,
    example: `self SetFlaggedAnimKnobAllRestart( "runanim", %precombatrun1, %body, 1, 0.1, 1 );`,
    callOn: `<entity> (entity) An entity`,
    returnType: ``,
    module: `Animation`,
    supportedAt: ``,
    games: ['CoD2 SP'],
    parameters: [
        {
            name: `entity`,
            desc: `An entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `notifyname`,
            desc: `The string to notify notetracks with.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `animation`,
            desc: `The animation or animtree node to change.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `root`,
            desc: `An ancestor of the animation.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weight`,
            desc: `Goal weight of this animation. Defaults to 1.0.`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `time`,
            desc: `Time to transition to this weight in seconds. Defaults to 0.2.`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rate`,
            desc: `Playback rate of the animation. Defaults to 1.0.`,
            type: ``,
            isOptional: true,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `getClanDescription`,
    desc: `Return the player's clan description`,
    example: `player GetClanDescription();`,
    callOn: `Entity`,
    returnType: ``,
    module: `Clans`,
    supportedAt: `Xbox 360 Only`,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: ``,
            desc: `Entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `getClanMotto`,
    desc: `Return motto of the clan`,
    example: `player GetClanMotto();`,
    callOn: `Entity`,
    returnType: ``,
    module: `Clans`,
    supportedAt: `Xbox 360 Only`,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: ``,
            desc: `Entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `getClanURL`,
    desc: `Return URL link of the clan`,
    example: `player GetClanURL();`,
    callOn: `Entity`,
    returnType: ``,
    module: `Clans`,
    supportedAt: `Xbox 360 Only`,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: ``,
            desc: `Entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `sendRanks`,
    desc: `Send rank`,
    example: `sendRanks();`,
    callOn: ``,
    returnType: ``,
    module: `Clans`,
    supportedAt: `Xbox 360 Only`,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [

    ]
}));

defs.push(new CodFunction({
    name: `setPlayerTeamRank`,
    desc: `Sets player team rank`,
    example: `SetPlayerTeamRank(player, 0, rank);`,
    callOn: ``,
    returnType: ``,
    module: `Clans`,
    supportedAt: `Xbox 360 Only`,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `player`,
            desc: `The player`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `teamId`,
            desc: `Team ID`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `rank`,
            desc: `Rank`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `disableWeapon`,
    desc: `Disable the player's weapon`,
    example: `level.player DisableWeapon();`,
    callOn: `A Player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: ``,
            desc: `A Player`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `enableWeapon`,
    desc: `Enable the player's weapon`,
    example: `level.player EnableWeapon();`,
    callOn: `A Player`,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: ``,
            desc: `A Player`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `makeCvarServerInfo`,
    desc: `Flags a cvar with the DVAR_CODINFO flag`,
    example: `MakeCvarServerInfo( "ui_ctf_timelimit", "30" );`,
    callOn: ``,
    returnType: ``,
    module: `Client`,
    supportedAt: ``,
    games: ['CoD2 MP'],
    parameters: [
        {
            name: `cvarName`,
            desc: `The name of the cvar to change`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `cvarValue`,
            desc: `The new value of the cvar`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `getCvar`,
    desc: `Gets the value of a cvar, as a string.`,
    example: `if( GetCvar( "debug_skipintro" ) == "on" ) ...`,
    callOn: ``,
    returnType: `string`,
    module: `Dvars`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `cvar`,
            desc: `The cvar name.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `getCvarFloat`,
    desc: `Gets the value of a cvar, as a floating point number.`,
    example: `oldDelay = GetCvarFloat( "effect_delay" );`,
    callOn: ``,
    returnType: `float`,
    module: `Dvars`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `cvar`,
            desc: `The cvar name.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `getCvarInt`,
    desc: `Gets the value of a cvar, as an integer.`,
    example: `level.fogtype = GetCvarInt( "scr_fog_type" );`,
    callOn: ``,
    returnType: `integer`,
    module: `Dvars`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `cvar`,
            desc: `The cvar name.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `getDebugCvar`,
    desc: `Gets the value of a debug cvar, as a string.`,
    example: `if( GetDebugCvar( "debug_skipintro" ) == "on" ) ...`,
    callOn: ``,
    returnType: `string`,
    module: `Dvars`,
    supportedAt: ``,
    games: ['CoD2 SP'],
    parameters: [
        {
            name: `cvar`,
            desc: `The cvar name.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `getDebugCvarFloat`,
    desc: `Gets the value of a debug cvar, as a floating point number.`,
    example: `oldDelay = GetDebugCvarFloat( "effect_delay" );`,
    callOn: ``,
    returnType: `float`,
    module: `Dvars`,
    supportedAt: ``,
    games: ['CoD2 SP'],
    parameters: [
        {
            name: `cvar`,
            desc: `The cvar name.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `getDebugCvarInt`,
    desc: `Gets the value of a debug cvar, as an integer.`,
    example: `level.fogtype = GetDebugCvarInt( "scr_fog_type" );`,
    callOn: ``,
    returnType: `integer`,
    module: `Dvars`,
    supportedAt: ``,
    games: ['CoD2 SP'],
    parameters: [
        {
            name: `cvar`,
            desc: `The cvar name.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `setCvar`,
    desc: `Sets the value of a script cvar.  Can not set code cvars.  Script cvars are not preserved in savegames.`,
    example: `SetCvar( "r_eyesAdjust", "1" );`,
    callOn: ``,
    returnType: ``,
    module: `Dvars`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `cvar`,
            desc: `The cvar name as a string.`,
            type: `string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `value`,
            desc: `The cvar value.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `&&`,
            desc: `Values of parameters in localized string, starting with "&&1"`,
            type: ``,
            isOptional: true,
            isVariableLength: true,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `setSavedCvar`,
    desc: `Sets the value of a dvar. Saved dvars are saved in the save game, and are reset to default on level change. Only works on dvars that have the 'SAVED' parameter set`,
    example: `SetSavedCvar( "r_eyesAdjust", "1" );`,
    callOn: ``,
    returnType: ``,
    module: `Dvars`,
    supportedAt: ``,
    games: ['CoD2 SP'],
    parameters: [
        {
            name: `cvar`,
            desc: `The cvar name as a string.`,
            type: `string`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `value`,
            desc: `The cvar value.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `setCullFog`,
    desc: `Sets the amount of fog in the distance. The fog will increase linearly`,
    example: `SetCullFog(0, 16500, 0.7, 0.85, 1.0, 0);`,
    callOn: ``,
    returnType: ``,
    module: `Effects`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `nearDistance`,
            desc: `Distance from the camera that the fog will start`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `farDistance`,
            desc: `Distance from the camera that full occlusion will occur.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `red`,
            desc: `The red component of the fog as a value between 0.0 and 1.0`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `green`,
            desc: `The red component of the fog as a value between 0.0 and 1.0`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `blue`,
            desc: `The red component of the fog as a value between 0.0 and 1.0`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `transitionTime`,
            desc: `Transition time in seconds`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `disableAimAssist`,
    desc: `Disables aim assist on an entity.  The entity must have a brush model`,
    example: `self DisableAimAssist();`,
    callOn: `An entity with a brushmodel`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: ``,
            desc: `An entity with a brushmodel`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `enableAimAssist`,
    desc: `Enables aim assist on an entity.  The entity must have a brush model`,
    example: `self EnableAimAssist();`,
    callOn: `An entity with a brushmodel`,
    returnType: ``,
    module: `Entity`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: ``,
            desc: `An entity with a brushmodel`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `allowCrouch`,
    desc: `Sets whether the player can crouch`,
    example: `level.player allowCrouch(false);`,
    callOn: `<player> (entity) The player entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `playerCrouch`,
            desc: `: (bool) true if the player can crouch, and false otherwise.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `allowLeanLeft`,
    desc: `Sets whether the player can lean left`,
    example: `level.player allowLeanLeft(false);`,
    callOn: `<player> (entity) The player entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `playerLeanLeft`,
            desc: `: (bool) true if the player can lean left, and false otherwise.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `allowLeanRight`,
    desc: `Sets whether the player can lean right`,
    example: `level.player allowLeanRight(false);`,
    callOn: `<player> (entity) The player entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `playerLeanRight`,
            desc: `: (bool) true if the player can lean right, and false otherwise.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `allowProne`,
    desc: `Sets whether the player can prone`,
    example: `level.player allowProne(false);`,
    callOn: `<player> (entity) The player entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `playerProne`,
            desc: `: (bool) true if the player can prone, and false otherwise.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `allowStand`,
    desc: `Sets whether the player can stand up`,
    example: `level.player allowStand(false);`,
    callOn: `<player> (entity) The player entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `playerStand`,
            desc: `: (bool) true if the player can stand, and false otherwise.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `enableHealthShield`,
    desc: `Sets whether the player's health shield is active`,
    example: `level.player EnableHealthShield( false );`,
    callOn: `<player> (entity) The player entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `enable`,
            desc: `: A boolean. true to enable the health shield, and false otherwise`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `getGuid`,
    desc: `Gets the player's guid.`,
    example: `if ( level.player GetGuid() == 123456 ) ...`,
    callOn: `<player> (entity) The player entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `getNormalizedMovement`,
    desc: `Get the player's normalized movement vector.  Returns [-1,1] for X(forward) and Y(right) based on player's input.`,
    example: `movement = self GetNormalizedMovement();`,
    callOn: `<player> (entity) The player entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `getWeaponSlotAmmo`,
    desc: `Gets the ammo count for the weapon in the given slot.`,
    example: `ammo = level.player getweaponslotammo("primary");`,
    callOn: `<player> (entity) The player entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `weaponSlot`,
            desc: `Valid weaponslots are "primary" and "primaryb".`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `getWeaponSlotClipAmmo`,
    desc: `Gets the ammunition in the clip for the weapon in the given weapon slot.`,
    example: `ammo = level.player getweaponslotclipammo("primary");`,
    callOn: `<player> (entity) The player entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `weaponSlot`,
            desc: `Valid weaponslots are "primary" and "primaryb".`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `getWeaponSlotWeapon`,
    desc: `Gets the name of the weapon in the given weapon slot.`,
    example: `playerWeapon[0] = level.player getweaponslotweapon("primary");`,
    callOn: `<player> (entity) The player entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `weaponSlot`,
            desc: `Valid weaponslots are "primary" and "primaryb".`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `isFiring`,
    desc: `Returns true if the player is currently using a weapon`,
    example: `level.player IsFiring()`,
    callOn: `<player> (entity) The player entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `setClientCvar`,
    desc: `Set the cvar value for the specified name.`,
    example: `self SetClientCvar( "cg_drawhud", "0" );`,
    callOn: `<player> (entity) The player entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 MP'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `cvarName`,
            desc: `: The name of a cvar on client side`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `value`,
            desc: `: (string | localized string) The value to which the cvar will be set.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `&&`,
            desc: `Values of parameters in localized string, starting with "&&1"`,
            type: ``,
            isOptional: true,
            isVariableLength: true,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `setEnterTime`,
    desc: `Set the player's enter time.`,
    example: `level.player SetEnterTime( time );`,
    callOn: `<player> (entity) The player entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `time`,
            desc: `The player's enter time.`,
            type: `integer`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `setWeaponClipAmmo`,
    desc: `Set the weapon clip ammunition for the given weapon.`,
    example: `level.player setweaponclipammo(1);`,
    callOn: `<player> (entity) The player entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `weaponName`,
            desc: `: (sting) The weapon name for this weapon.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `ammunition`,
            desc: `: (integer) The amount of ammunition in the clip.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `setWeaponSlotAmmo`,
    desc: `Sets the ammunition for the weapon in the given weapon slot.`,
    example: `level.player setweaponslotammo("primary", 125);`,
    callOn: `<player> (entity) The player entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `weaponSlot`,
            desc: `Valid weaponslots are "primary" and "primaryb".`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `ammoCount`,
            desc: `The amount of ammunition.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `setWeaponSlotClipAmmo`,
    desc: `Sets the clip ammunition for the weapon in the given weapon slot.`,
    example: `level.player setweaponslotclipammo("primary", 125);`,
    callOn: `<player> (entity) The player entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `weaponSlot`,
            desc: `Valid weaponslots are "primary" and "primaryb".`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `ammoCount`,
            desc: `The amount of ammunition.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `setWeaponSlotWeapon`,
    desc: `Sets the weapon name for the given weapon slot.`,
    example: `level.player setweaponslotweapon("primary", weapon);`,
    callOn: `<player> (entity) The player entity`,
    returnType: ``,
    module: `Player`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `player`,
            desc: `The player entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `weaponSlot`,
            desc: `Valid weaponslots are "primary" and "primaryb".`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `weaponName`,
            desc: `The name of the weapon to use in this slot.`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `playLoopRumble`,
    desc: `Plays a looping controller rumble on the given player.`,
    example: `self PlayLoopRumble( "tank_rumble" );`,
    callOn: `Entity`,
    returnType: ``,
    module: `Rumble`,
    supportedAt: `Xbox 360 Only`,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: ``,
            desc: `Entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `rumbleName`,
            desc: `The name of the rumble to play`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `playLoopRumbleOnPos`,
    desc: `Plays a looping rumble at a given position.`,
    example: `PlayLoopRumbleOnPos( "artillery_quake", level.player.origin );`,
    callOn: ``,
    returnType: ``,
    module: `Rumble`,
    supportedAt: `Xbox 360 Only`,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `rumbleName`,
            desc: `The name of the rumble to play`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `position`,
            desc: `The position of the rumble`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `playRumble`,
    desc: `Plays a rumble on the given entity.`,
    example: `self PlayRumble( "damage_heavy" );`,
    callOn: `Entity`,
    returnType: ``,
    module: `Rumble`,
    supportedAt: `Xbox 360 Only`,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: ``,
            desc: `Entity`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        },
        {
            name: `rumbleName`,
            desc: `The name of the rumble to play`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `playRumbleOnPos`,
    desc: `Plays a rumble at a given position.`,
    example: `PlayRumbleOnPos( "artillery_quake", level.player.origin );`,
    callOn: ``,
    returnType: ``,
    module: `Rumble`,
    supportedAt: `Xbox 360 Only`,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `rumbleName`,
            desc: `The name of the rumble to play`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `position`,
            desc: `The position of the rumble`,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `fireTurret`,
    desc: `Fire the vehicle's turret`,
    example: `self FireTurret();`,
    callOn: `<vehicle> (entity) The vehicle entity`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP'],
    parameters: [
        {
            name: `vehicle`,
            desc: `The vehicle entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `getSpeedMPH`,
    desc: `Gets the current speed in miles per hour.`,
    example: `self GetSpeedMPH();`,
    callOn: `<vehicle> (entity) The vehicle entity`,
    returnType: ``,
    module: `Vehicles`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `vehicle`,
            desc: `The vehicle entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `disableGrenadeBounce`,
    desc: `Disallow grenades bouncing off of this entity`,
    example: `self DisableGrenadeBounce();`,
    callOn: `<entity> (entity) A damage trigger entity`,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `entity`,
            desc: `A damage trigger entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

defs.push(new CodFunction({
    name: `enableGrenadeBounce`,
    desc: `Allow grenades to bounce off of this entity`,
    example: `self EnableGrenadeBounce();`,
    callOn: `<entity> (entity) A damage trigger entity`,
    returnType: ``,
    module: `Weapons`,
    supportedAt: ``,
    games: ['CoD2 SP', 'CoD2 MP'],
    parameters: [
        {
            name: `entity`,
            desc: `A damage trigger entity`,
            type: `entity`,
            isOptional: false,
            isVariableLength: false,
            isCallOn: true
        }
    ]
}));

// added in IW4
defs.push(new CodFunction({
    name: `abs`,
    desc: ``,
    example: `( abs( x ) - abs( y ) > 0.5 )`,
    callOn: ``,
    returnType: ``,
    module: `Math`,
    supportedAt: ``,
    games: ['CoD MWR'],
    parameters: [
        {
            name: `number`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));

defs.push(new CodFunction({
    name: `physicslaunchclient`,
    desc: ``,
    example: ``,
    callOn: ``,
    returnType: ``,
    module: `Motion`,
    supportedAt: ``,
    games: ['CoD MWR'],
    parameters: [
        {
            name: `arg1`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        },
        {
            name: `arg2`,
            desc: ``,
            type: ``,
            isOptional: false,
            isVariableLength: false,
            isCallOn: false
        }
    ]
}));
