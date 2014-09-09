<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * MapsterEntity Entity.
 */
class MapsterEntity extends Entity {

/**
 * Fields that can be mass assigned using newEntity() or patchEntity().
 *
 * @var array
 */
	protected $_accessible = [
		'name' => true,
		'plural' => true,
		'mapster_entity_fields' => true,
	];

}
