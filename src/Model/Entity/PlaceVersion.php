<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * PlaceVersion Entity.
 */
class PlaceVersion extends Entity {

/**
 * Fields that can be mass assigned using newEntity() or patchEntity().
 *
 * @var array
 */
	protected $_accessible = [
		'name' => true,
		'description' => true,
		'image' => true,
		'link' => true,
		'place_type_id' => true,
		'coordinates' => true,
		'map_id' => true,
		'place_id' => true,
		'map' => true,
		'place' => true,
	];

}
