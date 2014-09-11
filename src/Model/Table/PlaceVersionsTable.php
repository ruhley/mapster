<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * PlaceVersions Model
 */
class PlaceVersionsTable extends Table {

/**
 * Initialize method
 *
 * @param array $config The configuration for the Table.
 * @return void
 */
	public function initialize(array $config) {
		$this->table('place_versions');
		$this->displayField('name');
		$this->primaryKey('id');
		$this->addBehavior('Timestamp');

		$this->belongsTo('PlaceTypes', [
			'foreignKey' => 'place_type_id',
		]);
		$this->belongsTo('Maps', [
			'foreignKey' => 'map_id',
		]);
		$this->belongsTo('Places', [
			'foreignKey' => 'place_id',
		]);
	}

/**
 * Default validation rules.
 *
 * @param \Cake\Validation\Validator $validator
 * @return \Cake\Validation\Validator
 */
	public function validationDefault(Validator $validator) {
		$validator
			->add('id', 'valid', ['rule' => 'numeric'])
			->allowEmpty('id', 'create')
			->validatePresence('name', 'create')
			->notEmpty('name')
			->allowEmpty('description')
			->allowEmpty('image')
			->allowEmpty('link')
			->add('place_type_id', 'valid', ['rule' => 'numeric'])
			->validatePresence('place_type_id', 'create')
			->notEmpty('place_type_id')
			->validatePresence('coordinates', 'create')
			->notEmpty('coordinates')
			->add('map_id', 'valid', ['rule' => 'numeric'])
			->validatePresence('map_id', 'create')
			->notEmpty('map_id')
			->add('place_id', 'valid', ['rule' => 'numeric'])
			->validatePresence('place_id', 'create')
			->notEmpty('place_id');

		return $validator;
	}

}
